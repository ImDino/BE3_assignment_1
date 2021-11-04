import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import BackBtn from './BackBtn';

export default function TodoEditForm({ todoItem, todoId }) {
  const { todoList } = useContext(UserContext);
  const [formData, setFormData] = useState({});
  const history = useHistory();

  useEffect(() => {
    setFormData(todoItem)
  }, []);

  function handleOnChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prevState) => ({ ...prevState, [name]: value }))
    setFormData((prevState) => ({ ...prevState, lastEditTime: new Date }))
  }
  
  function saveChanges() {
    if (formData === todoItem) {
      history.push(`/todo/${todoId}`);
    } else {
      console.log('update');
      // TODO send updated item to db then redirect back
    }
  }

  return (
    <>
      <input type="text" name="title" value={formData.title || ''} onChange={handleOnChange} />
      <br />
      <textarea name="content" value={formData.content || ''} onChange={handleOnChange} />
      <br />
      <BackBtn label="Cancel" />
      <button type="button" onClick={saveChanges}>Save</button>
    </>
  )
}
