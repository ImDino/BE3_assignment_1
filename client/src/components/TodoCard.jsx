import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Card = styled.div`
  border: 1px solid grey;
  padding: 7px;
  border-radius: 6px;
  white-space: nowrap;
`;

export default function TodoCard({data}) {
  const { title, content, _id } = data;
  const history = useHistory();

  function openDetails() {
    history.push(`/todo/${_id}`);
  };

  return (
    <Card onClick={openDetails}>
      <p>{title}</p>
    </Card>
  );
};
