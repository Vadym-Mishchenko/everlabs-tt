import { useEffect, useState } from 'react';
import { Todo } from './Todo';
import { TodoForm } from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import classnames from 'classnames'

import '../Todos/Todos.scss';


export const Todos = () => {

  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );
  const [filterTodo, setFilterTodo] = useState(todos);
  const [btnAll, setBntAll] = useState(false);
  const [btnTodo, setBntTodo] = useState(false);
  const [btnComplete, setBntComplete] = useState(false);


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
      setBntAll(false);
      setBntTodo(false);
      setBntComplete(false);
    }
  };

  const removeTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
    setBntAll(false);
    setBntTodo(false);
    setBntComplete(false);
  };

  const isTodoComlete = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      ).sort((a, b) => Number(a.complete) - Number(b.complete))
    ])
    setBntAll(false);
    setBntTodo(false);
    setBntComplete(false);
  };

  const sortTodobyAll = () => {
    setFilterTodo([
      ...todos
    ])
    setBntAll(true);
    setBntTodo(false);
    setBntComplete(false);
  };

  const sortTodobyComplete = () => {
    setFilterTodo([
      ...todos.filter(todo => todo.complete === true)
    ])
    setBntAll(false);
    setBntTodo(false);
    setBntComplete(true);
  };

  const sortTodobyTodo = () => {
    setFilterTodo([
      ...todos.filter(todo => todo.complete === false)
    ])
    setBntAll(false);
    setBntTodo(true);
    setBntComplete(false);
  };

  useEffect(() => {
    setFilterTodo(todos);
  }, [todos]);

  return (
    <div className="app__todos todos">
      <h1 className="todos__title">Todos Page</h1>
      < TodoForm addTodo={addTodo} />
      <button
        className={classnames("todos__btn", { "todos__btn--active": btnAll })}
        onClick={() => sortTodobyAll()}
      >
        All
      </button>
      <button
        className={classnames("todos__btn", "todos__btn--todo", { "todos__btn--active": btnTodo })}
        onClick={() => sortTodobyTodo()}
      >
        Todo
      </button>
      <button
        className={classnames("todos__btn", { "todos__btn--active": btnComplete })}
        onClick={() => sortTodobyComplete()}
      >
        Complete
      </button>
      {filterTodo.map((todo) => {
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
