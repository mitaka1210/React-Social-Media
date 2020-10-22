import { authAPI } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  userId: null,
  email: null,
  login: null,
  //isFetching: false,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
        isAuth: true,
      };

    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});
//! Проверяваме да ли сме се логна ли и ако сме сменяме isAuth: true защото в началото сме казали, че е FALSE
export const getAuthUserData = () => (dispatch) => {
  authAPI.me().then((response) => {
    if (response.data.resultCode === 0) {
      let { userId, email, login } = response.data.data;
      dispatch(setAuthUserData(userId, email, login, true));
    }
  });
};
export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    }
  });
};

export const logout = () => (dispatch) => {
  authAPI.logout().then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  });
};

export default authReducer;
