import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from "../contexts/UserContext";
import TodoEditForm from '../components/TodoEditForm';

export default function TodoEditPage(props) {
  const { todoList } = useContext(UserContext);
  const [todoItem, setTodoItem] = useState(null)
  const todoId = props.match.params.id;
  
  useEffect(() => {
		if (todoList) {
			setTodoItem(
        todoList.filter((todo) => todo._id === todoId)[0]
			);
		}
	}, [todoList, todoId]);
  
  return (
    <>
      <h2>Edit Todo</h2>
      {
        todoItem 
        ? (
          <TodoEditForm todoItem={todoItem} todoId={todoId}/>
        )
        : (
          <p>Loading...</p>
        )
      }
    </>
  )
}
