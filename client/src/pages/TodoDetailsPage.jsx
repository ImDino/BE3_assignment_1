import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export default function TodoDetails(props) {
  const { todos } = useContext(UserContext);
  const todoID = props.match.params.id;
  const data = todos.filter((todo) => todo.id === parseInt(todoID))[0]
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
