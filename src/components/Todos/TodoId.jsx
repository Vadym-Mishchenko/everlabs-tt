import { useParams, Link } from "react-router-dom";

import './TodoId.scss';

export const TodoId = () => {
  const {id} = useParams();
  return (
    <div className="todos__todosId todosId">
      <h1 className="todosId__title">Todo id: {id}</h1>
        <Link className="todosId__link" to={'/todos/'}>Back</Link>
    </div>
    
  )
};