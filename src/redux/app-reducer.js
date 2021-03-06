import { getAuthUserData } from './auth-reducer.js';
import { authAPI } from '../api/api';
import { stopSubmit } from 'redux-form';
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';
let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

//export const initializedSuccess = () => ({
//  type: INITIALIZED_SUCCESS,
//});

//export const initializeApp = () => (dispatch) => {
//  let promiseReturn = dispatch(getAuthUserData());

//  //TODO: Aко имаме повече от един promis тогава викаме Promises.all([]) и в масива изреждаме имената на promises  тук имаме само един
//  //dispatch(името на action());
//  //dispatch(името на action());

//  Promise.all([promiseReturn]).then(() => {
//    dispatch(initializedSuccess());
//  });
//};

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });
export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData());

  //dispatch(somethingelse());
  //dispatch(somethingelse());
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess());
  });
};
export default appReducer;
