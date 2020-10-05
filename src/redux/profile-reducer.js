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


    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };
//*===========================================================================*//
            // TODO: COPY ARRAY//

            let stateCopy1 = {...state};
            stateCopy1.posts = [...state.posts]
            stateCopy1.posts.push(newPost);
            stateCopy1.newPostText = '';
            return stateCopy1
        }

        case UPDATE_NEW_POST_TEXT : {

//*==============================================================================*//
            // TODO: COPY ARRAY//

            let stateCopy2 = {...state};
            stateCopy2.newPostText = action.newText;
            return stateCopy2

        }
        default:
            return state;
    }





    // if (action.type === ADD_POST){
    //     let newPost = {
    //         id: 5,
    //         message: state.newPostText,
    //         likesCount: 0,
    //     };
    //     let stateCopy1 = {...state};
    //     stateCopy1.posts = [...state.posts]
    //     stateCopy1.posts.push(newPost);
    //     stateCopy1.newPostText = '';
    //     return stateCopy1
    // }
    // else if (action.type === UPDATE_NEW_POST_TEXT) {
    //     let stateCopy2 = {...state};
    //     stateCopy2.newPostText = action.newText;
    //     return stateCopy2
    //
    // }



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

