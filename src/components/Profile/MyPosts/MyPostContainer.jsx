import React from 'react';
import {addPostActionCreator, UpdateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";



function MyPostsContainer() {

  return (
      <StoreContext.Consumer>
          {
              (store) => {
                  let state = store.getState();

                  let addPost = () => {

                      store.dispatch(addPostActionCreator());
                  };

                  let onPostChange = (text) => {

                      let action = UpdateNewPostTextActionCreator(text);
                      store.dispatch(action);

                  }
                  return (
                      <MyPosts
                          updateNewPost={onPostChange}
                          addPost={addPost}
                          posts={state.profilePage.posts}
                          newPostText={state.profilePage.newPostText}/>
                  )
              }
          }

      </StoreContext.Consumer>
  );
}

export default MyPostsContainer;
