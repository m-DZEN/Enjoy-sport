import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
  isAuthDone: false,
  errorInfo: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    setIsAuthDone(state, action) {
      state.isAuthDone = action.payload;
    },
    setErrorInfo(state, action) {
      state.errorInfo = action.payload;
    },
    resetErrorInfo(state) {
      state.errorInfo = null;
    },
    resetAuthState: () => initialAuthState,
  },
});

export const {
  setIsAuthDone,
  setErrorInfo,
  resetErrorInfo,
  resetAuthState,
} = authSlice.actions;

export default authSlice.reducer;
