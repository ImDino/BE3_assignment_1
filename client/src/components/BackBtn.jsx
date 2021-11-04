import React from 'react'
import { useHistory } from "react-router-dom";

export default function BackBtn({label}) {
  const history = useHistory();

  function goBack() {
    history.goBack();
  }

  return (
    <button
      type="button"
      onClick={goBack}
    >
      {label}
    </button>
  )
}
