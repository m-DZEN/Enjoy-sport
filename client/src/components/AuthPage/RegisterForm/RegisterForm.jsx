import React from 'react';
import styles from './RegisterForm.module.scss';

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

      <div className={styles.fillBlock} />

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
