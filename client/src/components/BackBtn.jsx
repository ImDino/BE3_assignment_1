import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

// eslint-disable-next-line react/prop-types
export default function BackBtn({ label }) {
  const { history } = useContext(UserContext);

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
  );
}
