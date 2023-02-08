import React, { useContext } from 'react';
import { AuthContext } from '../../context/Auth.context';
import styles from './LoginForm.module.css'
import { Link } from 'react-router-dom';
export default function LoginForm() {
  const {
    authFormInput,
    handleAuthFormInputChange,
    errorInfo,
    handleAuthFormSubmit,
  } = useContext(AuthContext);

  return (
    <div>
      <form onSubmit={(event) => handleAuthFormSubmit(event, 'login')}>
        <input className={styles.loginform}
          type="text"
          name="login"
          value={authFormInput.login}
          onChange={handleAuthFormInputChange}
          placeholder="Ваше имя..."
          required
        />
        <input className={styles.loginform}
          type="password"
          name="password"
          value={authFormInput.password}
          onChange={handleAuthFormInputChange}
          placeholder="И пароль..."
          required
        />
        <button type="submit">Войти</button>
      </form>
      <Link to="/auth/register">
          или зарегистрироваться
        </Link>
      {errorInfo}
    </div>
  );
}
