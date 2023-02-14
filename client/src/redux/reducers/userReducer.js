import { createReducer, createAction } from '@reduxjs/toolkit';

const initialUserInfoState = {
  userId: null,
  userLogin: null,
  userName: null,
  isUserInfoLoading: true,
};

export const setUserInfoLoadingState = createAction('SET_USER_INFO_LOADING_STATE');
export const setUserInfo = createAction('SET_USER_INFO');
export const clearUserInfo = createAction('CLEAR_USER_INFO');

export const userReducer = createReducer(initialUserInfoState, (builder) => {
  builder
    .addCase(setUserInfo, (state, action) => ({ ...state, ...action.payload }))
    .addCase(clearUserInfo, () => initialUserInfoState)
    .addCase(setUserInfoLoadingState, (state, action) => {
      state.isUserInfoLoading = action.payload;
    });
});
