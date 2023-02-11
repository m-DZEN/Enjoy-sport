import React from 'react';
import styles from './AuthForms.module.scss';

import backImage1 from '../../../images/auth-backimage-001.svg';

export default function LoginForm({ setIsAlreadyRegistered }) {
  return (
    <div className={styles.form}>
      <h3 className={styles.formLogo}>Вход</h3>

      <form
        className={styles.formBlock}
        onSubmit={() => console.log('SUBMIT')}
      >
        <input
          className={styles.formBlockInput}
          type="text"
          name="login"
          // value={authFormInput.login}
          // onChange={handleAuthFormInputChange}
          placeholder="Ваш логин..."
          required
        />
        <input
          className={styles.formBlockInput}
          type="password"
          name="password"
          // value={authFormInput.password}
          // onChange={handleAuthFormInputChange}
          placeholder="Ваш пароль..."
          required
        />
        <button
          className={styles.formBlockButton}
          type="submit"
        >
          Войти
        </button>
      </form>

      <div className={styles.errorBlock}>
        {/* <p>Пользователя с указанным логином</p> */}
        {/* <p>не существует!</p> */}
        {/* <p>Введён неверный пароль!</p> */}
        <p>Ошибка на сервере...</p>
        <p>Пожалуйста, повторите попытку!</p>
      </div>

      <div className={styles.fillBlock} />

      <img src={backImage1} alt="backimage" style={{ height: '280px' }} />

      <button
        className={styles.formFutterButton}
        type="button"
        onClick={() => setIsAlreadyRegistered((prev) => !prev)}
      >
        Зарегистрироваться?
      </button>
    </div>
  );
}
