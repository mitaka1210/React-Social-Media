import { combineReducers, createStore } from 'redux';

import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';

let reducers = combineReducers({
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

let store = createStore(reducers);
//! Ako искаме да можем да викаме store в конзолата на Chrome и да проверим какво ни връща като информация в този случй пишем store.getState().profilePage.profile и вуждаме какво има в profil като данни.

window.store = store;

export default store;
