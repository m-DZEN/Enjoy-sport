import React from 'react';

export default function Settings() {
  return (
    <div>
      <div>
        <h3 style={{ color: 'red' }}>Введите свои данные</h3>
      </div>
      <div>
        <div>
          <label>
            Login
            <input />
          </label>
        </div>
        <div>
          <label>
            password
            <input />
          </label>
        </div>
        <div>
          <label>
            email
            <input />
          </label>
        </div>
        <div>
          <label>
            дата рождения
            <input />
          </label>
        </div>
      </div>
      <div>
        <button type="button">SAVE</button>
      </div>
    </div>
  );
}
