import React, { useContext } from "react";
import Store from "../context";

export default function TodoList() {
  const { state, dispatch } = useContext(Store);

  const pluralize = count =>
    count > 1 ? `There are ${count} todos.` : `There is ${count} todo.`;
    
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-12">
            <br />
              { state.todos.length === 0 ? 
                (
                <h4>Yay! All todos are done! Take a rest!</h4>
                ) : (
                <div className="row">
                  <div className="col-md-8">
                    <h5>Todo List</h5>
                  </div>
                  <div className="col-md-4">
                    <span className="float-right">{pluralize(state.todos.length)}</span>
                  </div>
                </div>
              )}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">
              {state.todos.map(t => (
                <li key={t} className="list-group-item">
                  {t}
                  <button
                    className="float-right btn btn-danger btn-sm"
                    style={{ marginLeft: 10 }}
                    onClick={() => dispatch({ type: "COMPLETE", payload: t })}
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
