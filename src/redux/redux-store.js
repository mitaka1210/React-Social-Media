import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from './app-reducer';

let reducers = combineReducers({
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
//TODO: redux devTool extension
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
//! Ako искаме да можем да викаме store в конзолата на Chrome и да проверим какво ни връща като информация в този случй пишем store.getState().profilePage.profile и вуждаме какво има в profil като данни.

window.store = store;

export default store;
