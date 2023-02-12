import React, { useState, useEffect, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setErrorInfo, resetErrorInfo, resetAuthState } from '../../../redux/reducers/authSlice';
import { fetchRegisterThunk } from '../../../redux/asyncActions/fetchRegisterThunk';

import styles from './AuthForms.module.scss';

import backImage2 from '../../../images/auth-backimage-002.svg';

const initialRegisterFormState = {
  userLogin: '',
  userEmail: '',
  userPassword: '',
  repeatedUserPassword: '',
};

function RegisterForm({ setIsAlreadyRegistered }) {
  const [registerFormInput, setRegisterFormInput] = useState(initialRegisterFormState);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthDone, errorInfo } = useSelector((store) => store.authStore);
  // console.log('===>', { isAuthDone, errorInfo });

  useEffect(() => {
    dispatch(resetErrorInfo());
  }, [registerFormInput]);

  useEffect(() => {
    if (isAuthDone) {
      navigate('/');
    }
    return () => {
      dispatch(resetAuthState());
      setRegisterFormInput(initialRegisterFormState);
    };
  }, [isAuthDone]);

  const handleRegisterFormInputChange = (event) => {
    setRegisterFormInput((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleRegisterFormSubmit = (event) => {
    event.preventDefault();
    const userLogin = registerFormInput.userLogin.trim();
    const userEmail = registerFormInput.userEmail.trim();
    const userPassword = registerFormInput.userPassword.trim();
    const repeatedUserPassword = registerFormInput.repeatedUserPassword.trim();
    if (userLogin && userEmail && userPassword && repeatedUserPassword) {
      if (userPassword === repeatedUserPassword) {
        dispatch(fetchRegisterThunk({ userLogin, userEmail, userPassword }));
      } else {
        dispatch(setErrorInfo(['Введённые пароли не совпадают!']));
      }
    } else {
      setRegisterFormInput((prev) => ({
        ...prev, userLogin, userEmail, userPassword, repeatedUserPassword,
      }));
      console.log('!!! Присутствует пустой INPUT !!!');
      setTimeout(() => {
        dispatch(setErrorInfo(['Заполните все поля формы!']));
      }, 100);
    }
  };

  return (
    <div className={styles.form}>
      <h3 className={styles.formLogo}>Регистрация</h3>

      <form
        className={styles.formBlock}
        onSubmit={handleRegisterFormSubmit}
      >
        <input
          className={styles.formBlockInput}
          type="text"
          name="userLogin"
          value={registerFormInput.userLogin}
          onChange={handleRegisterFormInputChange}
          placeholder="Ваш логин..."
          required
        />
        <input
          className={styles.formBlockInput}
          type="email"
          name="userEmail"
          value={registerFormInput.userEmail}
          onChange={handleRegisterFormInputChange}
          placeholder="Ваш email..."
          required
        />
        <input
          className={styles.formBlockInput}
          type="password"
          name="userPassword"
          value={registerFormInput.userPassword}
          onChange={handleRegisterFormInputChange}
          placeholder="Ваш пароль..."
          required
        />
        <input
          className={styles.formBlockInput}
          type="password"
          name="repeatedUserPassword"
          value={registerFormInput.repeatedUserPassword}
          onChange={handleRegisterFormInputChange}
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
        {errorInfo && errorInfo.map((el) => (<p key={el}>{el}</p>))}
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

export default memo(RegisterForm);
