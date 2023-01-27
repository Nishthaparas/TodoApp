import React, { useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
        id: Math.floor(Math.random()* 10000),
        text: input
    })
    setInput("");
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
     {props.edit ? (
      <>
       <input
        type="text"
        placeholder="Update todo"
        name="text"
        className="todo-input edit"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="todo-button edit">Update</button>
      </>
     ): (
      <>
       <input
        type="text"
        placeholder="Add a todo"
        name="text"
        className="todo-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="todo-button">Add Todo</button>
      </>
     )}
    </form>
  );
};

export default TodoForm;
