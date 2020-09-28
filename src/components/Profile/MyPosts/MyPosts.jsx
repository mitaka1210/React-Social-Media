import React from 'react';
import style from './myPosts.module.css';
import Post from './Post/Post';
import message from '../../../Data/Data';

function MyPosts(props) {
  let postsElements = props.posts.map((p) => <Post message={p.message} likeCount={p.likeCounts} />);
  return (
    <div className={style.postblock}>
      <h2>My Post</h2>
      <div className={style.sendText}>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
}

export default MyPosts;
