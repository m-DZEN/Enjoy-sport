import React from 'react';

export default function LoginForm({ setIsAlreadyRegistered }) {
  return (
    <div>
      <div style={{ color: 'white' }}>LoginForm</div>
      <button type="button" onClick={() => setIsAlreadyRegistered((prev) => !prev)}>REGISTER</button>
    </div>
  );
}
