import React, { useContext } from 'react'
import styled from 'styled-components';
import { UserContext } from "../contexts/UserContext";

const StyledNavbar = styled.div`
  height: 30px;
`;

export default function Navbar() {
  const { kickUser, history, isLoggedIn } = useContext(UserContext);
  
  return (
    <StyledNavbar>
      {isLoggedIn && (
        <>
          <button
            type="button"
            onClick={() => {history.push('/')}}
          >
            Home
          </button>
          <button
            type="button"
            onClick={kickUser}
          >
            Logout
          </button>
        </>
      )}
    </StyledNavbar>
  )
}
