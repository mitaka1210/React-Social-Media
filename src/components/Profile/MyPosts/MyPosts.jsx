import React from 'react';
import style from './myPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
  let postData = [
    { id: 1, message: 'Hi, how are u?', likeCounts: 12 },
    { id: 2, message: "It's my first post", likeCounts: 11 },
    { id: 3, message: 'Here?', likeCounts: 33 },
    { id: 4, message: 'Do you want go eat?', likeCounts: 1 },
  ];

  return (
    <div className={style.postblock}>
      <h2>My Post</h2>
      <div className={style.sendText}>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={style.posts}>
        <Post message={postData[0].message} likeCount={postData[0].likeCounts} />
        <Post message={postData[1].message} likeCount={postData[1].likeCounts} />
        <Post message={postData[2].message} likeCount={postData[2].likeCounts} />
      </div>
    </div>
  );
}

export default MyPosts;
