/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../contexts/UserContext';
import TodoEditForm from '../components/TodoEditForm';

export default function TodoEditPage(props) {
  const { todoList } = useContext(UserContext);
  const [todoItem, setTodoItem] = useState(null);
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
      <h2>Edit Todo</h2>
      {
        todoItem
          ? (
            <TodoEditForm todoItem={todoItem} todoId={id} />
          )
          : (
            <p>Loading...</p>
          )
      }
    </>
  );
}
