import React, { useState, useEffect, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

import { setErrorInfo, resetErrorInfo, resetAuthState } from '../../../redux/reducers/authSlice';
import { fetchLoginThunk } from '../../../redux/asyncActions/fetchLoginThunk';

import styles from './AuthForms.module.scss';

import backImage1 from '../../../images/auth-backimage-001.svg';

const initialLoginFormState = {
  userLogin: '',
  userPassword: '',
};

function LoginForm({ setIsAlreadyRegistered }) {
  const [loginFormInput, setLoginFormInput] = useState(initialLoginFormState);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthDone, errorInfo } = useSelector((store) => store.authStore);
  // console.log('===>', { isAuthDone, errorInfo });

  useEffect(() => {
    dispatch(resetErrorInfo());
  }, [loginFormInput]);

  useEffect(() => {
    if (isAuthDone) {
      navigate('/');
    }
    return () => {
      dispatch(resetAuthState());
      setLoginFormInput(initialLoginFormState);
    };
  }, [isAuthDone]);

  const handleLoginFormInputChange = (event) => {
    setLoginFormInput((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleLoginFormSubmit = (event) => {
    event.preventDefault();
    const userLogin = loginFormInput.userLogin.trim();
    const userPassword = loginFormInput.userPassword.trim();
    if (userLogin && userPassword) {
      dispatch(fetchLoginThunk({ userLogin, userPassword }));
    } else {
      setLoginFormInput((prev) => ({ ...prev, userLogin, userPassword }));
      console.log('!!! Присутствует пустой INPUT !!!');
      setTimeout(() => {
        dispatch(setErrorInfo(['Заполните все поля формы!']));
      }, 100);
    }
  };

  return (
    <div className={styles.form}>
      <h3 className={styles.formLogo}>Вход</h3>

      <form
        className={styles.formBlock}
        onSubmit={handleLoginFormSubmit}
      >
        <div className={styles.formBlockInputContainer}>
          <label
            className={styles.formBlockInputLabel}
            htmlFor="userLogin"
            hidden={!loginFormInput.userLogin}
          >
            Логин
          </label>
          <input
            className={styles.formBlockInput}
            type="text"
            name="userLogin"
            value={loginFormInput.userLogin}
            onChange={handleLoginFormInputChange}
            placeholder="Ваш логин..."
            required
          />
        </div>

        <div className={styles.formBlockInputContainer}>
          <label
            className={styles.formBlockInputLabel}
            htmlFor="userPassword"
            hidden={!loginFormInput.userPassword}
          >
            Пароль
          </label>
          <input
            className={`${styles.formBlockInput} ${styles.password}`}
            type={passwordVisible ? 'text' : 'password'}
            name="userPassword"
            value={loginFormInput.userPassword}
            onChange={handleLoginFormInputChange}
            placeholder="Ваш пароль..."
            required
          />
          <button
            className={styles.formBlockPasswordButton}
            type="button"
            hidden={!loginFormInput.userPassword}
            onClick={() => setPasswordVisible((prev) => !prev)}
          >
            {passwordVisible ? (<BsEyeSlash />) : (<BsEye />)}
          </button>
        </div>

        <button
          className={styles.formBlockButton}
          type="submit"
        >
          Войти
        </button>
      </form>

      <div className={styles.errorBlock}>
        {errorInfo && errorInfo.map((el) => (<p key={el}>{el}</p>))}
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

export default memo(LoginForm);
