const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are u?', likeCounts: 12 },
        { id: 2, message: "It's my first post", likeCounts: 11 },
        { id: 3, message: 'Here?', likeCounts: 33 },
        { id: 4, message: 'Do you want go eat?', likeCounts: 1 },
        { id: 5, message: 'Do you want go eat?', likeCounts: 7 },
    ],
    newPostText: 'DD',
}

 const  profileReducer = (state = initialState, action) => {

    if (action.type === ADD_POST){
        let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0,
        };
        state.posts.push(newPost);
        state.newPostText = '';

    }
    else if (action.type === UPDATE_NEW_POST_TEXT) {

        state.newPostText = action.newText;

    }

    return state;

}

export const addPostActionCreator = () => {

    return {
        type: ADD_POST
    }
}
export const UpdateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text

    }
}

export default profileReducer

