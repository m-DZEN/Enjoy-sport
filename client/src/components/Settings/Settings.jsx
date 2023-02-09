import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function Settings() {
  const user = useSelector((store) => store.userStore);

  const [inputs, setInputs] = useState({
    login: ' ',
    password: ' ',
    email: ' ',
  });

  useEffect(() => {
    (async function () {
      // console.log('user.userId useEffect', user);
      const res = await fetch('http://localhost:3001/settings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user }),
        credentials: 'include',
      });
      const data = await res.json();
      // console.log('data==========>', data);

      setInputs((pre) => ({ ...pre, ...data }));
    }());
  }, []);
  // console.log('inputs===>useEff', inputs);

  const formHandler = (e) => {
    // console.log(e.target.name, e.target.value);
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const createUserData = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:3001/settings', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputs, user }),
      credentials: 'include',
    });
    await res.json();
    // console.log('data=====createUserData', data);
    setInputs(inputs);
  };

  return (
    <div>
      <div>
        <h3 style={{ color: 'red' }}>Введите свои данные</h3>
      </div>
      <form onSubmit={createUserData}>
        <div>
          <div>
            <label>
              Login
              <input
                value={inputs.login}
                onChange={formHandler}
                type="text"
                name="login"
              />
            </label>
          </div>
          {/* <div>
            <label>
              password
              <input
                value={inputs.password}
                onChange={formHandler}
                type="text"
                name="password"
              />
            </label>
          </div> */}
          <div>
            <label>
              email
              <input
                value={inputs.email}
                onChange={formHandler}
                type="text"
                name="email"
              />
            </label>
          </div>
        </div>
        <div>
          <button type="submit">SAVE</button>
        </div>
      </form>
    </div>
  );
}
