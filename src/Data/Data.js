import profileReducer from './Profile-reducer';
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are u?', likeCounts: 12 },
        { id: 2, message: "It's my first post", likeCounts: 11 },
        { id: 3, message: 'Here?', likeCounts: 33 },
        { id: 4, message: 'Do you want go eat?', likeCounts: 1 },
        { id: 5, message: 'Do you want go eat?', likeCounts: 7 },
      ],
      newPostText: 'DD',
    },
        dialogsPage: {

        dialogs: [

        {id: 1,name: 'Dimitar'},

        {id: 2,name: 'Aleksandar'},

        { id: 3,name: 'Pesho'},

        {id: 4, name: 'Gosho' },

        {id: 5,name: 'Ivan'},
            {id: 6, name: 'Ivane'}

      ],
        messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your it-kamasutra?' },
        { id: 3, message: 'Where we go today?' },
        { id: 4, message: 'What is your plan for today?' },
        { id: 5, message: 'What ' },
      ],
        newMessageBody: ""
    },
        sidebar : {},
  },
    _callSubscriber  (){
        console.log('State changed');
    },

    getState(){
    return this._state;
  },
    subscribe  (observer)  {
        this._callSubscriber = observer;
    },


    dispatch (action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);

    }
}




export default store;
window.store = store;
//store - OOP