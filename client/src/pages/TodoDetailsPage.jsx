import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from "../contexts/UserContext";
import TodoDetails from '../components/TodoDetails';

export default function TodoDetailsPage(props) {
  const { todoList } = useContext(UserContext);
  const [todoItem, setTodoItem] = useState({});
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
      <h2>Todo Details</h2>
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
  );
};
