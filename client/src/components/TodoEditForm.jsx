import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from "../contexts/UserContext";
import { FetchKit } from '../data/FetchKit';
import BackBtn from './BackBtn';

export default function TodoEditForm({ todoItem, todoId }) {
  const { todoList, setTodoList, setMessage, handleError, history } = useContext(UserContext);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setFormData(todoItem)
  }, []);

  function handleOnChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    setFormData((prevState) => ({ ...prevState, lastEditTime: new Date }));
  };
  
  function saveChanges() {
    if (formData === todoItem) {
      //history.push(`/todo/${todoId}`);
      history.goBack(); //REVIEW cleaner, but safe?
    } else {
      FetchKit.updateTodo(todoId, formData)
        .then(res => {
          const { status } = res;
          
          if (status === 200) {
            const updateIndex = todoList.findIndex(todo => {
              return todo._id === todoId;
            });
            let newTodoList = todoList;
            newTodoList[updateIndex] = formData;
            setTodoList([...newTodoList]);
            setMessage('Updated successfully!');
            history.goBack(); //REVIEW cleaner, but safe?
          }
        })
        .catch(error => {
          handleError(error); //REVIEW does this work? test in postman
        });
    }
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
        onClick={saveChanges}
      >
        Save
      </button>
    </>
  );
};
