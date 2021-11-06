import React, { useEffect, useContext } from 'react'
import GoogleLogin from 'react-google-login';
import { useHistory } from 'react-router-dom';
import { FetchKit, setToken } from '../data/FetchKit';
import { UserContext } from "../contexts/UserContext";

export default function LoginPage() {
  const { setMessage, setMessageRed, setIsLoggedIn, setUserInfo } = useContext(UserContext);
  const history = useHistory();

  const responseSuccessGoogle = (res) => {
    const tokenId = res.tokenObj.id_token;
    const { name, email } = res.profileObj;

    FetchKit.login(tokenId)
      .then(res => {
        const { token } = res.data;

        if (token) {
          setToken(token);
          setIsLoggedIn(true);
          setUserInfo({name, email});
          setMessage('Successfully logged in!');
          history.push('/');
        }
      })
      .catch(error => {
        setMessageRed(true);
        setMessage('Something went wrong.')
      });
  };
  
  const responseErrorGoogle = (res) => {
    setMessageRed(true);
    setMessage('Something went wrong.');
  };

  return (
    <div>
      <h2>Login with google</h2>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Login"
        onSuccess={responseSuccessGoogle}
        onFailure={responseErrorGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}
