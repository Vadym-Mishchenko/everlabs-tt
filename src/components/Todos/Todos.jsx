import { useEffect, useState } from 'react';
import { Todo } from './Todo';
import { TodoForm } from './TodoForm';

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
        id: todos.length + 1,
        task: userInput,
        complete: false
      }
      setTodos([...todos, newItem])
    }
  }

  const removeTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const isTodoComlete = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      )
    ])
  }

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
