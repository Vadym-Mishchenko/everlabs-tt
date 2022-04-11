import { useEffect, useState } from 'react';
import { Todo } from './Todo';
import { TodoForm } from './TodoForm';
import { v4 as uuidv4 } from 'uuid';

import '../Todos/Todos.scss';


export const Todos = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  const addTodo = (userInput) => {
    if (userInput) {
      const newItem = {
        id: uuidv4(),
        task: userInput,
        complete: false
      }
      setTodos([newItem, ...todos])
    }
  };

  const removeTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  };

  const isTodoComlete = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      ).sort((a, b) => Number(a.complete) - Number(b.complete))
    ])
  };

  return (
    <div className="app__todos todos">
      <h1 className="todos__title">Todos Page</h1>
      < TodoForm addTodo={addTodo} />
      {todos.map((todo) => {
        return (
          <Todo
            todo={todo}
            key={todo.id}
            isTodoComlete={isTodoComlete}
            removeTodo={removeTodo}
          />
        )
      })}
    </div>
  )
};
