import React from "react";
import { useAPI } from "../context";
import { TodoHeader } from "./TodoHeader";

export default function TodoList() {
  const { todos, fetchTodos, completeTodo } = useAPI();
  React.useEffect(() => { fetchTodos() }, [])

  const pluralize = count =>
    count > 1 ? `There are ${count} todos.` : `There is ${count} todo.`;

  let header =
    todos.length === 0 ? (
      <h4>Yay! All todos are done! Take a rest!</h4>
    ) : (
      <TodoHeader>
        <span className="float-right">{pluralize(todos.length)}</span>
      </TodoHeader>
    );
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-12">
            <br />
            {header}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">
              {todos.map(({ todo }, index) => (
                <li key={index} className="list-group-item">
                  {todo}
                  <button
                    className="float-right btn btn-danger btn-sm"
                    style={{ marginLeft: 10 }}
                    onClick={() => completeTodo({ todo })}
                  >
                    Complete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
