import React from 'react';
import { useHistory } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import moment from 'moment';
import BackBtn from './BackBtn';

export default function TodoDetails({data}) {
  const { title, content, lastEditTime, id } = data;
  const history = useHistory();

  function openEdit() {
    history.push(`/todo/${id}/edit`);
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
