import React from 'react'
import GoogleLogin from 'react-google-login';
import env from "react-dotenv";

export default function LoginPage() {
  return (
    <div>
      <h2>Login with google</h2>
      <GoogleLogin
        clientId={env.GOOGLE_CLIENT_ID}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />,
    </div>
  )
}
