import { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [userInput, setUserInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(userInput)
    setUserInput("")
  };

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
  };

  return (
    <>
      <form action="#" onSubmit={handleSubmit}>
        <input
          className="todos__input"
          type="text"
          placeholder="Enter todo"
          value={userInput}
          onChange={handleChange}
        />
        <button className="todos__btn">Save</button>
      </form>
    </>
  )
};
