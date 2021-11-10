/* eslint-disable no-underscore-dangle */
import React, { useContext, useState } from 'react';
import UserContext from '../contexts/UserContext';
import { FetchKit } from '../data/FetchKit';
import BackBtn from './BackBtn';

export default function TodoCreateForm() {
  const {
    todoList, setTodoList, setMessage, handleError, history,
  } = useContext(UserContext);
  const [formData, setFormData] = useState({});

  function handleOnChange(e) {
    const { name } = e.target;
    const { value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    setFormData((prevState) => ({ ...prevState, lastEditTime: new Date() }));
  }

  function createTodo() {
    FetchKit.createTodo(formData)
      .then((res) => {
        const { status } = res;
        const { todoId } = res.data;

        if (status === 200) {
          const newTodoList = todoList;
          const newTodo = formData;
          newTodo._id = todoId;
          newTodoList.push(newTodo);
          setTodoList([...newTodoList]);
          setMessage('Created successfully!');
          history.goBack();
        }
      })
      .catch((error) => {
        handleError(error);
      });
  }

  return (
    <>
      <input
        type="text"
        name="title"
        value={formData.title || ''}
        onChange={handleOnChange}
      />
      <br />
      <textarea
        name="content"
        value={formData.content || ''}
        onChange={handleOnChange}
      />
      <br />
      <BackBtn label="Cancel" />
      <button
        type="button"
        onClick={createTodo}
      >
        Save
      </button>
    </>
  );
}
