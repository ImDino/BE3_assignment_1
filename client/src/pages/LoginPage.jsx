import React from 'react'
import GoogleLogin from 'react-google-login';
import { FetchKit, setToken } from '../data/FetchKit';

export default function LoginPage() {
  const responseSuccessGoogle = (res) => {
    const tokenId = res.tokenObj.id_token;
    const name = res.profileObj.name;

    FetchKit.login(tokenId)
      .then(res => {
        const { data, status } = res;
        if (status === 200) {
          setToken(data.token);
          //setUser(name)
          //setIsLoggedIn(true) ?
          //flash message, login success
          //redirect to home
        } else {
          //flash message, login failed
        }
      })
  }
  
  const responseErrorGoogle = (res) => {
    console.log(res);
  }

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
