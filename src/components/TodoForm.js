import React, { useState } from "react";
import { useAPI } from "../context";

export default function TodoForm() {
  const { postTodo } = useAPI();
  const [todo, setTodo] = useState("");

  function handleTodoChange(e) {
    setTodo(e.target.value);
  }

  function handleTodoAdd() {
    postTodo({ todo })
    setTodo("");
  }

  function handleSubmitForm(event) {
    if (event.keyCode === 13) handleTodoAdd();
  }

  return (
    <div className="row">
      <div className="col-md-12">
        <br />
        <div className="input-group">
          <input
            className="form-control"
            value={todo}
            autoFocus={true}
            placeholder="Enter new todo"
            onKeyUp={handleSubmitForm}
            onChange={handleTodoChange}
          />
          <div className="input-group-append">
            <button className="btn btn-primary" onClick={handleTodoAdd}>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
