import { createAsyncThunk } from '@reduxjs/toolkit';
import { setUserInfoAction } from '../reducers/userReducer';
import { setIsAuthDone, setErrorInfo } from '../reducers/authSlice';

export const fetchRegisterThunk = createAsyncThunk(
  'auth/fetchRegister',
  async (userData, { dispatch }) => {
    console.log('fetchRegister ===>', { userData });
    try {
      const response = await fetch('http://localhost:3001/register', {
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
          case 'REGISTER-OK':
            console.log(data.backendResult);
            dispatch(setUserInfoAction(data.userInfo));
            dispatch(setIsAuthDone(true));
            break;
          case 'NEED-NEW-LOGIN':
            console.log(data.backendResult);
            dispatch(setErrorInfo([
              'Пользователь с указанным логином',
              'уже существует!',
            ]));
            break;
          case 'NEED-NEW-EMAIL':
            console.log(data.backendResult);
            dispatch(setErrorInfo([
              'Пользователь с указанным email',
              'уже существует!',
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
