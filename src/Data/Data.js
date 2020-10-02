const ADD_POST = 'ADD-POST'
const Update_New_Post_Text = 'UPDATE-NEW-POST-TEXT';

let store = {
  _state : {
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
    messagesPages: {
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your it-kamasutra?' },
        { id: 3, message: 'Where we go today?' },
        { id: 5, message: 'What is your plan for today?' },
        { id: 6, message: 'Yo' },
        { id: 7, message: 'U are beatify' },
        { id: 8, message: 'I am lazy' },
        { id: 9, message: 'I am too much stupid' },
      ],
      dialogs: [
        {
          id: 1,
          name: 'Dimitar',
        },

        {
          id: 2,
          name: 'Aleksandar',
        },

        {
          id: 3,
          name: 'Pesho',
        },

        {
          id: 4,
          name: 'Gosho',
        },

        {
          id: 5,
          name: 'Ivan',
        },

        {
          id: 6,
          name: 'Dragan',
        },

        {
          id: 7,
          name: 'Petkan',
        },

        {
          id: 8,
          name: 'Ivailo',
        },

        {
          id: 9,
          name: 'Mitko',
        },
      ],
    },
  },
  getState(){
    return this._state;
  },
  _callSubscriber  (){
    console.log('State changed');
  },

    subscribe  (observer)  {
        this._callSubscriber = observer;
    },
    dispatch (action) {
      if (action.type === ADD_POST){
          let newPost = {
          id: 5,
          message: this._state.profilePage.newPostText,
          likesCount: 0,
      };
          this._state.profilePage.posts.push(newPost);
          this._state.profilePage.newPostText = '';
          this._callSubscriber(this._state);
      }
      else {

        if (action.type === Update_New_Post_Text) {
                  this._state.profilePage.newPostText = action.newText;
                  this._callSubscriber(this._state);
              }
      }
    }

}
export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}

export const UpdateNewPostTextActionCreator = (text) => {
  return {
    type: Update_New_Post_Text,
    newText: text

  }
}
export default store;
window.store = store;
//store - OOP