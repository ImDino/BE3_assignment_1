import React from 'react';
import { useHistory } from "react-router-dom";

export default function TodoEditForm({data}) {
  const history = useHistory();
  const { title, content, lastEditTime, id } = data;

  function saveChanges() {
    console.log('save Changes');
    history.push(`/todo/${id}`);
  }

  return (
    <>
      <p>{title}</p>
      <p>{content}</p>
      <button type="button" onClick={saveChanges}>Save</button>
    </>
  )
}
