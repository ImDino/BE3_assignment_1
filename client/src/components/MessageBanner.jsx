import React, { useContext } from 'react';
import styled from 'styled-components'
import { UserContext } from "../contexts/UserContext";

const StyledBanner = styled.div`
  width: 100%;
  height: 50px;
  position: fixed;
  top: 50px;
  left: 0;
  display: flex;
  background-color: ${props => props.warning ? "red" : "#10d62a"};
  justify-content: center;
  align-items: center;
`

export default function MessageBanner() {
  const { message, messageRed } = useContext(UserContext);

  return (
    <StyledBanner warning={messageRed}>
      <span>{message}</span>
    </StyledBanner>
  )
}
