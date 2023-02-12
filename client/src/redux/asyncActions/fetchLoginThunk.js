import { createAsyncThunk } from '@reduxjs/toolkit';
import { setUserInfoAction } from '../reducers/userReducer';
import { setIsAuthDone, setErrorInfo } from '../reducers/authSlice';

export const fetchLoginThunk = createAsyncThunk(
  'auth/fetchLogin',
  async (userData, { dispatch }) => {
    // console.log('fetchLogin ===>', { userData });
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
        credentials: 'include',
      });
      // console.log('response.status ===>', response.status);
      if (response.status === 200) {
        const data = await response.json();
        switch (data.backendResult) {
          case 'LOGIN-OK':
            console.log(data.backendResult);
            dispatch(setUserInfoAction(data.userInfo));
            dispatch(setIsAuthDone(true));
            break;
          case 'BAD-LOGIN':
            console.log(data.backendResult);
            dispatch(setErrorInfo([
              'Пользователя с указанным логином',
              'не существует!',
            ]));
            break;
          case 'BAD-PASSWORD':
            console.log(data.backendResult);
            dispatch(setErrorInfo([
              'Введён неверный пароль!',
            ]));
            break;
          default:
            throw new Error();
        }
      } else {
        console.log('!!! Ошибка на сервере !!!');
        dispatch(setErrorInfo([
          'Ошибка на сервере...',
          'Пожалуйста, повторите попытку!',
        ]));
      }
    } catch (error) {
      console.log('ERROR:', error.message);
      dispatch(setErrorInfo([
        'Ошибка на сервере...',
        'Пожалуйста, повторите попытку!',
      ]));
    }
  },
);
