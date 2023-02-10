import React from 'react';
import styles from './LoginForm.module.scss';

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

      <div className={styles.fillBlock} />

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
