/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React, { useContext } from 'react';
import styled from 'styled-components';
import UserContext from '../contexts/UserContext';
import { FetchKit } from '../data/FetchKit';

const Card = styled.div`
  border: 1px solid grey;
  padding: 7px;
  border-radius: 6px;
  white-space: nowrap;
  position: relative;

  &:not(:hover){
    button {
      display: none
    }
  }
  
  button {
    height: 20px;
    width: 20px;
    position: absolute;
    top: 5px;
    right: 5px;
    border-radius: 50px;
    padding-left: 0.8vw;
  }
`;

export default function TodoCard({ data }) {
  const { title, _id } = data;
  const {
    history, handleError, todoList, setTodoList, setMessage,
  } = useContext(UserContext);

  function openDetails() {
    history.push(`/todo/${_id}`);
  }

  function deleteTodo(e) {
    e.stopPropagation();
    FetchKit.deleteTodo(_id)
      .then((res) => {
        const { status } = res;

        if (status === 200) {
          const removeIndex = todoList.findIndex((todo) => todo._id === _id);
          const newTodoList = todoList;
          newTodoList.splice(removeIndex, 1);
          setTodoList([...newTodoList]);
          setMessage('Removed successfully!');
        }
      })
      .catch((error) => {
        handleError(error);
      });
  }

  return (
    <Card onClick={() => openDetails()}>
      <button
        type="button"
        onClick={deleteTodo}
      >
        X
      </button>
      <p>{title}</p>
    </Card>
  );
}
