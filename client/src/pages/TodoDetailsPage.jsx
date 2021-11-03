import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from "../contexts/UserContext";
import TodoDetails from '../components/TodoDetails';

export default function TodoDetailsPage(props) {
  const { todoList } = useContext(UserContext);
  const [todoItem, setTodoItem] = useState({})
  const todoID = props.match.params.id;
  
  useEffect(() => {
		if (todoList) {
			setTodoItem(
        todoList.filter((todo) => todo.id === parseInt(todoID))[0]
			);
		}
	}, [todoList, todoID]);
  
  return (
    <>
      {
        todoItem 
        ? (
          <TodoDetails data={todoItem}/>
        )
        : (
          <p>Loading...</p>
        )
      }
    </>
  )
}
