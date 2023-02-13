const initialUserState = { userLogin: null, userId: null, userName: null };

const SET_USER_INFO = 'SET_USER_INFO';
const CLEAR_USER_INFO = 'CLEAR_USER_INFO';

export function userReducer(state = initialUserState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_USER_INFO:
      console.log({ type, payload });
      return { ...state, ...payload };
    case CLEAR_USER_INFO:
      console.log({ type, payload });
      return { ...state, ...initialUserState };
    default:
      return state;
  }
}
export const setUserInfoAction = (payload) => ({ type: SET_USER_INFO, payload });
export const clearUserInfoAction = () => ({ type: CLEAR_USER_INFO, payload: null });
