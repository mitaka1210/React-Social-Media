import {combineReducers, createStore} from 'redux';


import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    profilePage: profileReducer
});


let store = createStore(reducers);

export default store;