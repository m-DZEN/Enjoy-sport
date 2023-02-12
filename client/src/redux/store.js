import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userReducer } from './reducers/userReducer';
import authReducer from './reducers/authSlice';

const rootReducer = combineReducers({
  userStore: userReducer,
  authStore: authReducer,
});

export const store = configureStore({ reducer: rootReducer });
