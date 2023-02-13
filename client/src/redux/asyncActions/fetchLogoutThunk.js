import { createAsyncThunk } from '@reduxjs/toolkit';
import { clearUserInfo, setUserInfoLoadingState } from '../reducers/userReducer';

export const fetchLogoutThunk = createAsyncThunk(
  'fetchLogout',
  async (_, { dispatch }) => {
    try {
      const response = await fetch('http://localhost:3001/logout', { credentials: 'include' });
      // console.log('response.status ===>', response.status);
      if (response.status === 200) {
        const { backendResult } = await response.json();
        if (backendResult === 'LOGOUT-OK') {
          console.log(backendResult);
          dispatch(clearUserInfo());
          dispatch(setUserInfoLoadingState(false));
        }
      } else {
        console.log(`Ошибка ${response.status} на сервере!`);
      }
    } catch (error) {
      console.log('ERROR:', error.message);
    }
  },
);
