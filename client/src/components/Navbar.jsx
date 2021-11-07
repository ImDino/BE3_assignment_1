import React, { useContext } from 'react'
import { UserContext } from "../contexts/UserContext";

export default function Navbar() {
  const { kickUser, history } = useContext(UserContext);
  
  return (
    <div>
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
    </div>
  )
}
