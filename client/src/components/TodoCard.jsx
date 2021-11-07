import React, { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from "../contexts/UserContext";

const Card = styled.div`
  border: 1px solid grey;
  padding: 7px;
  border-radius: 6px;
  white-space: nowrap;
`;

export default function TodoCard({data}) {
  const { title, _id } = data;
  const { history } = useContext(UserContext);

  function openDetails() {
    history.push(`/todo/${_id}`);
  };

  return (
    <Card onClick={openDetails}>
      <p>{title}</p>
    </Card>
  );
};
