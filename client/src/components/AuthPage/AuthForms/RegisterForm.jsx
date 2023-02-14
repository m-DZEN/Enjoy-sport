import React, { useState, useEffect, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import validator from 'email-validator';

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
  const [userPasswordVisible, setUserPasswordVisible] = useState(false);
  const [repeatedUserPasswordVisible, setRepeatedUserPasswordVisible] = useState(false);

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
      if (validator.validate(userEmail)) {
        if (userPassword === repeatedUserPassword) {
          dispatch(fetchRegisterThunk({ userLogin, userEmail, userPassword }));
        } else {
          dispatch(setErrorInfo(['Введённые пароли не совпадают!']));
        }
      } else {
        dispatch(setErrorInfo(['Email указан в неверном формате!']));
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
        <div className={styles.formBlockInputContainer}>
          <label
            className={styles.formBlockInputLabel}
            htmlFor="userLogin"
            hidden={!registerFormInput.userLogin}
          >
            Логин
          </label>
          <input
            className={styles.formBlockInput}
            type="text"
            name="userLogin"
            value={registerFormInput.userLogin}
            onChange={handleRegisterFormInputChange}
            placeholder="Ваш логин..."
            required
          />
        </div>

        <div className={styles.formBlockInputContainer}>
          <label
            className={styles.formBlockInputLabel}
            htmlFor="userEmail"
            hidden={!registerFormInput.userEmail}
          >
            Email
          </label>
          <input
            className={styles.formBlockInput}
            type="text"
            name="userEmail"
            value={registerFormInput.userEmail}
            onChange={handleRegisterFormInputChange}
            placeholder="Ваш email..."
            required
          />
        </div>

        <div className={styles.formBlockInputContainer}>
          <label
            className={styles.formBlockInputLabel}
            htmlFor="userPassword"
            hidden={!registerFormInput.userPassword}
          >
            Пароль
          </label>
          <input
            className={`${styles.formBlockInput} ${styles.password}`}
            type={userPasswordVisible ? 'text' : 'password'}
            name="userPassword"
            value={registerFormInput.userPassword}
            onChange={handleRegisterFormInputChange}
            placeholder="Ваш пароль..."
            required
          />
          <button
            className={styles.formBlockPasswordButton}
            type="button"
            hidden={!registerFormInput.userPassword}
            onClick={() => setUserPasswordVisible((prev) => !prev)}
          >
            {userPasswordVisible ? (<BsEyeSlash />) : (<BsEye />)}
          </button>
        </div>

        <div className={styles.formBlockInputContainer}>
          <label
            className={styles.formBlockInputLabel}
            htmlFor="repeatedUserPassword"
            hidden={!registerFormInput.repeatedUserPassword}
          >
            Пароль повторно
          </label>
          <input
            className={`${styles.formBlockInput} ${styles.password}`}
            type={repeatedUserPasswordVisible ? 'text' : 'password'}
            name="repeatedUserPassword"
            value={registerFormInput.repeatedUserPassword}
            onChange={handleRegisterFormInputChange}
            placeholder="Повторите пароль..."
            required
          />
          <button
            className={styles.formBlockPasswordButton}
            type="button"
            hidden={!registerFormInput.repeatedUserPassword}
            onClick={() => setRepeatedUserPasswordVisible((prev) => !prev)}
          >
            {repeatedUserPasswordVisible ? (<BsEyeSlash />) : (<BsEye />)}
          </button>
        </div>

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
