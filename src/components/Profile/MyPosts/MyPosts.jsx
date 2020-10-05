import React from 'react';
import style from './myPosts.module.css';
import Post from './Post/Post';

import './MyPostContainer';

function MyPosts(props) {

    let postsElements = props.posts.map((p) => <Post message={p.message} key={p.id} likeCount={p.likeCounts} />);

    let newPostElement = React.createRef();

  let onAddPost = () => {
      props.addPost();

  };


  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPost(text);


  };

  return (
    <div className={style.postblock}>
      <h2>My Post</h2>
      <div className={style.sendText}>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
        <button onClick={onAddPost}>Add post</button>
      </div>
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
}

export default MyPosts;
