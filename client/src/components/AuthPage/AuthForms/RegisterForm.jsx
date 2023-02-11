import React from 'react';
import styles from './AuthForms.module.scss';

import backImage2 from '../../../images/auth-backimage-002.svg';

export default function RegisterForm({ setIsAlreadyRegistered }) {
  return (
    <div className={styles.form}>
      <h3 className={styles.formLogo}>Регистрация</h3>

      <form
        className={styles.formBlock}
        onSubmit={() => console.log('SUBMIT')}
      >
        <input
          className={styles.formBlockInput}
          type="text"
          name="login"
          placeholder="Ваш логин..."
          required
        />
        <input
          className={styles.formBlockInput}
          type="email"
          name="email"
          placeholder="Ваш email..."
          required
        />
        <input
          className={styles.formBlockInput}
          type="password"
          name="password"
          placeholder="Ваш пароль..."
          required
        />
        <input
          className={styles.formBlockInput}
          type="password"
          name="password-repeat"
          placeholder="Повторите пароль..."
          required
        />
        <button
          className={styles.formBlockButton}
          type="submit"
        >
          Зарегистрироваться
        </button>
      </form>

      <div className={styles.errorBlock}>
        {/* <p>Пользователь с указанным email</p> */}
        {/* <p>Пользователь с указанным логином</p> */}
        {/* <p>уже существует!</p> */}
        {/* <p>Введённые пароли не совпадают!</p> */}
        <p>Ошибка на сервере...</p>
        <p>Пожалуйста, повторите попытку!</p>
      </div>

      <div className={styles.fillBlock} />

      <img src={backImage2} alt="backimage" style={{ height: '200px' }} />

      <button
        className={styles.formFutterButton}
        type="button"
        onClick={() => setIsAlreadyRegistered((prev) => !prev)}
      >
        Уже регистрировались?
      </button>
    </div>
  );
}
