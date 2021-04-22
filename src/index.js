import React from "react";
import ReactDOM from "react-dom";

import { APIContextProvider } from "./context";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <APIContextProvider>
      <TodoForm />
      <TodoList />
    </APIContextProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
