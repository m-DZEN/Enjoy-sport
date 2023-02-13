import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  setUserInfoLoadingState,
  setUserInfo,
  clearUserInfo,
} from '../reducers/userReducer';

export const fetchUserInfoThunk = createAsyncThunk(
  'userInfo/fetchUserInfo',
  async (_, { dispatch }) => {
    try {
      dispatch(setUserInfoLoadingState(true));
      const response = await fetch('http://localhost:3001', { credentials: 'include' });
      // console.log('response.status ===>', response.status);
      if (response.status === 200) {
        const data = await response.json();
        if (data.backendResult === 'SESSION-OK') {
          console.log(data.backendResult, data.userInfo);
          dispatch(setUserInfo(data.userInfo));
        }
        if (data.backendResult === 'NEED-LOGIN') {
          console.log(data.backendResult);
          dispatch(clearUserInfo());
        }
      } else {
        console.log(`Ошибка ${response.status} на сервере!`);
      }
    } catch (error) {
      console.log('ERROR:', error.message);
    } finally {
      dispatch(setUserInfoLoadingState(false));
    }
  },
);
