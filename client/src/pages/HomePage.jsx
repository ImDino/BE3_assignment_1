import React, { useContext } from 'react'
import TodoGrid from '../components/TodoGrid'
import { UserContext } from '../contexts/UserContext';

export default function HomePage() {
  const { todoList } = useContext(UserContext);

  return (
    <>
      <h2>Todo List</h2>
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
  )
}
