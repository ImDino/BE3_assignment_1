/* eslint-disable no-underscore-dangle */
import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../contexts/UserContext';
import { FetchKit } from '../data/FetchKit';
import BackBtn from './BackBtn';

// eslint-disable-next-line react/prop-types
export default function TodoEditForm({ todoItem, todoId }) {
  const {
    todoList, setTodoList, setMessage, handleError, history,
  } = useContext(UserContext);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setFormData(todoItem);
  }, []);

  function handleOnChange(e) {
    const { name } = e.target;
    const { value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    setFormData((prevState) => ({ ...prevState, lastEditTime: new Date() }));
  }

  function saveChanges() {
    if (formData === todoItem) {
      history.goBack();
    } else {
      FetchKit.updateTodo(todoId, formData)
        .then((res) => {
          const { status } = res;

          if (status === 200) {
            const updateIndex = todoList.findIndex((todo) => todo._id === todoId);
            const newTodoList = todoList;
            newTodoList[updateIndex] = formData;
            setTodoList([...newTodoList]);
            setMessage('Updated successfully!');
            history.goBack();
          }
        })
        .catch((error) => {
          handleError(error);
        });
    }
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
        onClick={saveChanges}
      >
        Save
      </button>
    </>
  );
}
