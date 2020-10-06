import {combineReducers, createStore} from 'redux';


import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
});


let store = createStore(reducers);

export default store;