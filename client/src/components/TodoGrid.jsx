/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import styled from 'styled-components';
import TodoCard from './TodoCard';

const StyledGrid = styled.div`
    width: 100%;
    max-width: 1350px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 16px;
    
    @media (max-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
    };
    @media (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    };
    @media (max-width: 500px) {
      grid-template-columns: repeat(1, 1fr);
    };
`;

export default function TodoGrid({ todoList }) { // REVIEW change from data to todoList?
  return (
    <StyledGrid>
      {
        todoList.map((todo) => <TodoCard data={todo} key={todo._id} />)
      }
    </StyledGrid>
  );
}
