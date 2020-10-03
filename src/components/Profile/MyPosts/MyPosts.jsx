import React from 'react';
import style from './myPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, UpdateNewPostTextActionCreator} from "../../../Data/Data";



function MyPosts(props) {

    let postsElements = props.posts.map((p) => <Post message={p.message} likeCount={p.likeCounts} />);

    let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };


  let onPostChange = () => {
    let text = newPostElement.current.value;
      const action = UpdateNewPostTextActionCreator(text);
      // let newVar = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
      props.dispatch(action);

  };

  return (
    <div className={style.postblock}>
      <h2>My Post</h2>
      <div className={style.sendText}>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
}

export default MyPosts;
