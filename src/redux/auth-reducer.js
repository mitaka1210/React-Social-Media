import { authAPI } from '../api/api';
import { stopSubmit } from 'redux-form';
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
  return authAPI.me().then((response) => {
    if (response.data.resultCode === 0) {
      let { userId, email, login } = response.data.data;
      dispatch(setAuthUserData(userId, email, login, true));
    }
  });
};

//!====== LOGIN AUTH check=======
//TODO: LoginToWebsite това го вземаме от името което сме да ли на формата в LoginForm.jsx( form: 'LoginToWebsite').stopSubmit se получва от redux-form за даможе да кажем да ли сме обърка ли името,паролата или email в примера сме казали само,че  _error глобален( може сме обърка ли името или паролата това се казва така зада се защитим от това някой друг да се логне с acc)и ще ни се изпише текста .

export const login = (email, password, rememberMe) => (dispatch) => {
  return authAPI.login(email, password, rememberMe).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
      dispatch(stopSubmit('LoginToWebsite', { _error: message }));
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
