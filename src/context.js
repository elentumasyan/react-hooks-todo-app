import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const BASE_URL = 'http://135.181.252.247:8080/todo'

const APIContext = createContext();

export function APIContextProvider({ children }) {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetchTodos()
  }, []);

  const fetchTodos = async () => {
      // const { data } = await axios.get(
      //   BASE_URL
      // );
      setTodos([ { "todo": "Clean dishes" } ]);
  }

  const postTodo = async (todo) => {
      // const { data } = await axios.post(
      //   BASE_URL, todo
      // );
      setTodos([...todos, todo ]);
  }

  return (
    <APIContext.Provider
      value={{
        todos, fetchTodos, postTodo
      }}
    >
      {children}
    </APIContext.Provider>
  );
}

export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}

export default APIContext;
