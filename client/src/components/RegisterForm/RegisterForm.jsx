import React, { useContext } from 'react';
import { AuthContext } from '../../context/Auth.context';

export default function RegisterForm() {
  const {
    authFormInput,
    handleAuthFormInputChange,
    errorInfo,
    handleAuthFormSubmit,
  } = useContext(AuthContext);

  return (
    <>
      <form onSubmit={(event) => handleAuthFormSubmit(event, 'register')}>
        <input
          type="text"
          name="login"
          value={authFormInput.login}
          onChange={handleAuthFormInputChange}
          placeholder="Your Login..."
          required
        />
        <input
          type="password"
          name="password"
          value={authFormInput.password}
          onChange={handleAuthFormInputChange}
          placeholder="Your Password..."
          required
        />
        <button type="submit">Register</button>
      </form>
      {errorInfo}
    </>
  );
}
