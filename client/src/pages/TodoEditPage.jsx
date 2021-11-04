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
        todoList.filter((todo) => todo.id === parseInt(todoId))[0]
			);
		}
	}, [todoList, todoId]);
  
  return (
    <>
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
