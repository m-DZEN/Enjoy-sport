/* eslint-disable import/prefer-default-export */
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './reducers/userReducer';

const rootReducer = combineReducers({
  userStore: userReducer,
});

export const store = configureStore({ reducer: rootReducer });
