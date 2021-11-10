import React, { useContext } from 'react';
import styled from 'styled-components';
import { GoogleLogout } from 'react-google-login';
import UserContext from '../contexts/UserContext';

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
            onClick={() => { history.push('/'); }}
          >
            Home
          </button>
          <GoogleLogout
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={kickUser}
          />
        </>
      )}
    </StyledNavbar>
  );
}
