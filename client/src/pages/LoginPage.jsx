import React from 'react'
import GoogleLogin from 'react-google-login';

export default function LoginPage() {
  const responseSuccessGoogle = (res) => {
    console.log(res);
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
      />,
    </div>
  )
}
