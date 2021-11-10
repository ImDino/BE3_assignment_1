/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-underscore-dangle */
import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../contexts/UserContext';
import TodoDetails from '../components/TodoDetails';

export default function TodoDetailsPage(props) {
  const { todoList } = useContext(UserContext);
  const [todoItem, setTodoItem] = useState({});
  const { id } = props.match.params;

  useEffect(() => {
    if (todoList) {
      setTodoItem(
        todoList.filter((todo) => todo._id === id)[0],
      );
    }
  }, [todoList, id]);

  return (
    <>
      <h2>Todo Details</h2>
      {
        todoItem
          ? (
            <TodoDetails data={todoItem} />
          )
          : (
            <p>Loading...</p>
          )
      }
    </>
  );
}
