import React from 'react'
import { useHistory } from "react-router-dom";

export default function TodoDetails({data}) {
  const { title, content, lastEditTime, id } = data;
  const history = useHistory();

  function openEdit() {
    history.push(`/todo/${id}/edit`)
  }

  return (
    <>
      <p>{title}</p>
      <p>{content}</p>
      <p>{lastEditTime}</p>
      <button type="button" onClick={openEdit}>Edit</button>
    </>
  )
}
