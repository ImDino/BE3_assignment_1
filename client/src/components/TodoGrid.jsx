import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

export default function TodoGrid() {
  const { fakeTodoData } = useContext(UserContext);

  return (
    <div>
      todogrid
      {
        fakeTodoData.map((todo, index) => {
          console.log(todo);
        })
      }
    </div>
  )
}
