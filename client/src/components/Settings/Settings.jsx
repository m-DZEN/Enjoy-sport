import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './Settings.module.scss';
import ButtonChatAndMotivation from '../ButtonChatAndMotivation/ButtonChatAndMotivation';

export default function Settings() {
  const user = useSelector((store) => store.userStore);

  const [inputs, setInputs] = useState({
    name: ' ',
    login: ' ',
    email: ' ',
  });

  useEffect(() => {
    (async function () {
      const res = await fetch('http://localhost:3001/settings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user }),
        credentials: 'include',
      });
      const data = await res.json();

      setInputs((pre) => ({ ...pre, ...data }));
    }());
  }, []);

  const formHandler = (e) => {
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
    setInputs(inputs);
  };

  return (
    <div>
      <div>
        <h3 className={styles.h3}>Введите свои данные</h3>
      </div>
      <form onSubmit={createUserData}>
        <div>

          <div className={styles.middleDiv}>
            <div className={styles.smallDiv}>
              Имя
            </div>
            <div className={styles.smallDiv}>
              <input
                className={styles.input}
                value={inputs.name}
                onChange={formHandler}
                type="text"
                name="name"
              />
            </div>
          </div>

          <div className={styles.middleDiv}>
            <div className={styles.smallDiv}>
              Login
            </div>
            <div className={styles.smallDiv}>
              <input
                className={styles.input}
                value={inputs.login}
                onChange={formHandler}
                type="text"
                name="login"
              />
            </div>
          </div>
          <div className={styles.middleDiv}>
            <div className={styles.smallDiv}>
              email
            </div>
            <div className={styles.smallDiv}>
              <input
                className={styles.input}
                value={inputs.email}
                onChange={formHandler}
                type="text"
                name="email"
              />
            </div>

          </div>
        </div>
        <div>
          <button className={styles.buttonStyle} type="submit">SAVE</button>
        </div>
      </form>
      <ButtonChatAndMotivation />
    </div>
  );
}
