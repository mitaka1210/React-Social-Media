import React from 'react';
import {addPostActionCreator, UpdateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";



function MyPostsContainer(props) {
    debugger;
let state = props.store.getState();


  let addPost = () => {

    props.store.dispatch(addPostActionCreator());
  };


  let onPostChange = (text) => {

     let action = UpdateNewPostTextActionCreator(text);
     props.store.dispatch(action);

  };

  return (
   <MyPosts updateNewPost ={onPostChange}
            addPost = {addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
   />
  );
}

export default MyPostsContainer;
