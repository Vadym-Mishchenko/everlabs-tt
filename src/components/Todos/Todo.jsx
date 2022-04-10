import classnames from 'classnames'

import '../Todos/Todos.scss';

export const Todo = ({ todo, isTodoComlete, removeTodo }) => {
  return (
    <div className='todos__container'>

      <button
        className="todos__check"
        onClick={() => isTodoComlete(todo.id)}
      >
        check
      </button>

      <div
        key={todo.id}
        className={classnames('todos__todo', {'todos__todo--strike': todo.complete})}
      >
        {todo.task}
      </div>

      <button
        className="todos__remove"
        onClick={() => removeTodo(todo.id)}
      >
        X
      </button>
  
    </div>
  );
};
