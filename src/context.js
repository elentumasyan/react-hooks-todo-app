import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const BASE_URL = 'http://135.181.252.247:8080/'
const TODO_URL = BASE_URL + 'todo'
const COMPLETE_URL = BASE_URL + 'complete'

const APIContext = createContext();

export function APIContextProvider({ children }) {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetchTodos()
  }, []);

  const fetchTodos = async () => {
      try {
        const { data } = await axios.get(TODO_URL);
        setTodos(data);
      } catch {
        console.log('Error: Could not fetch todo list.')
      }
  }

  const postTodo = async (todo) => {
      try {
        await axios.post(TODO_URL, todo);
        fetchTodos()
      } catch {
        console.log('Error: Could not add a new todo.')
      }
  }

  const completeTodo = async (todo) => {
      try {
        await axios.put(COMPLETE_URL, todo);
        fetchTodos()
      } catch {
        console.log('Error: Could not complete the todo.')
      }
  }

  return (
    <APIContext.Provider
      value={{
        todos, fetchTodos, postTodo, completeTodo
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
