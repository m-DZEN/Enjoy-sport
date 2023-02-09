/* eslint-disable no-console */
/* eslint-disable default-param-last */
const initialUserState = { userLogin: null, userId: null, userPoints: 0 };

const SET_USER_INFO = 'SET_USER_INFO';
const CLEAR_USER_INFO = 'CLEAR_USER_INFO';
const UPDATE_USER_POINTS = 'UPDATE_USER_POINTS';

export function userReducer(state = initialUserState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_USER_INFO:
      console.log({ type, payload });
      return { ...state, ...payload };
    case UPDATE_USER_POINTS:
      console.log({ type, payload });
      return { ...state, userPoints: action.payload };
    case CLEAR_USER_INFO:
      console.log({ type, payload });
      return { ...state, ...initialUserState };
    default:
      return state;
  }
}
export const setUserUpdatePoints = (payload) => ({ type: UPDATE_USER_POINTS, payload });
export const setUserInfoAction = (payload) => ({ type: SET_USER_INFO, payload });
export const clearUserInfoAction = () => ({ type: CLEAR_USER_INFO, payload: null });
