import React from 'react';
import {addPostActionCreator, UpdateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



// function MyPostsContainer() {
//
//   return (
//       <StoreContext.Consumer>
//           {
//               (store) => {
//                   let state = store.getState();
//
//                   let addPost = () => {
//
//                       store.dispatch(addPostActionCreator());
//                   };
//
//                   let onPostChange = (text) => {
//
//                       let action = UpdateNewPostTextActionCreator(text);
//                       store.dispatch(action);
//
//                   }
//                   return (
//                       <MyPosts
//                           updateNewPost={onPostChange}
//                           addPost={addPost}
//                           posts={state.profilePage.posts}
//                           newPostText={state.profilePage.newPostText}/>
//                   )
//               }
//           }
//
//       </StoreContext.Consumer>
//   );
// }

const mapStateToProps =(state) => {
    return {
        posts : state.profilePage.posts,
        newPostText : state.profilePage.newPostText
    }
}

const mapDispatchToProps =(dispatch) => {
    return {
    updateNewPost : (text) => {
        let action = UpdateNewPostTextActionCreator(text);
        dispatch(action)
    },
        addPost : () => {
            dispatch(addPostActionCreator())
        }
    }
}
const SuperPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default SuperPostContainer
