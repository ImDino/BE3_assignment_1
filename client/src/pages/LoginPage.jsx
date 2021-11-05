import React from 'react'
import GoogleLogin from 'react-google-login';
import axios from 'axios';

export default function LoginPage() {
  const responseSuccessGoogle = (res) => {
    const tokenId = res.tokenObj.id_token;
    const serverRoot = process.env.REACT_APP_SERVER_ROOT;
    const path = `${serverRoot}/auth/google`;
    
    axios.post(path, { tokenId: tokenId });
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
