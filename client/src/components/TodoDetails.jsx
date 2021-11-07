import React, { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import moment from 'moment';
import BackBtn from './BackBtn';
import { UserContext } from "../contexts/UserContext";

export default function TodoDetails({data}) {
  const { title, content, lastEditTime, _id } = data;
  const { history } = useContext(UserContext);

  function openEdit() {
    history.push(`/todo/${_id}/edit`);
  };

  return (
    <>
      <p>{title}</p>
      <ReactMarkdown>{content}</ReactMarkdown>
      <p>{`Last edited ${lastEditTime}`}</p>
      <BackBtn label="Go Back" />
      <button type="button" onClick={openEdit}>Edit</button>
    </>
  );
};
