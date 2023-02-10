import React from 'react';

export default function RegisterForm({ setIsAlreadyRegistered }) {
  return (
    <div>
      <div style={{ color: 'white' }}>LoginForm</div>
      <button type="button" onClick={() => setIsAlreadyRegistered((prev) => !prev)}>LOGIN</button>
    </div>
  );
}
