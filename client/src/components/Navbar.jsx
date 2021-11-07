import React, { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from "../contexts/UserContext";
import { GoogleLogout } from 'react-google-login';

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
          <GoogleLogout
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={kickUser}
          >
          </GoogleLogout>
        </>
      )}
    </StyledNavbar>
  );
};
