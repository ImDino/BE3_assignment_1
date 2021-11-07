import React, { useContext } from 'react';
import TodoGrid from '../components/TodoGrid';
import { UserContext } from '../contexts/UserContext';

export default function HomePage() {
  const { todoList, history } = useContext(UserContext);

  return (
    <>
      <h2>Todo List</h2>
      <button
        type="button"
        onClick={() => {history.push('/todo/create')}}
      >
        Create Todo
      </button>
      {
        todoList 
        ? (
          <TodoGrid data={todoList}/>
        )
        : (
          <p>Loading...</p>
        )
      }
    </>
  );
};
