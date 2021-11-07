import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from "../contexts/UserContext";
import { FetchKit } from '../data/FetchKit';
import BackBtn from './BackBtn';

export default function TodoCreateForm() {
  const { todoList, setTodoList, setMessage, handleError, history } = useContext(UserContext);
  const [formData, setFormData] = useState({});

  function handleOnChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    setFormData((prevState) => ({ ...prevState, lastEditTime: new Date() }));
  };
  
  function createTodo() {
    //!FIXME embed the new _id in todoList
    //TODO needs rearranging, get result of todo first before updating todoList
    FetchKit.createTodo(formData)
      .then(res => {
        const { status } = res;
        
        if (status === 200) {
          let newTodoList = todoList; 
          newTodoList.push(formData);
          setTodoList([...newTodoList]);
          setMessage('Created successfully!');
          history.goBack();
        }
      })
      .catch(error => {
        handleError(error);
      });
  };

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
};
