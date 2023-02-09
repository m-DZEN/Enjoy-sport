import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/Auth.context';
import styles from '../LoginForm/LoginForm.module.css';

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
          className={styles.loginform}
          type="text"
          name="login"
          value={authFormInput.login}
          onChange={handleAuthFormInputChange}
          placeholder="Ваше имя..."
          required
        />
        <input
          className={styles.loginform}
          type="password"
          name="password"
          value={authFormInput.password}
          onChange={handleAuthFormInputChange}
          placeholder="И пароль..."
          required
        />
        <button type="submit">Регистрация</button>
      </form>
      <Link to="/auth/login">
        или войти
      </Link>
      {errorInfo}
    </>
  );
}
