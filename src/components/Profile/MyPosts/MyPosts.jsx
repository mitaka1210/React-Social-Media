import React from 'react';
import style from './myPosts.module.css';
import Post from './Post/Post';
import { AddNewPostForm } from './PostFormRedux/PostFormRedux';

function MyPosts(props) {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} key={p.id} likeCount={p.likeCounts} />
  ));

  let addNewPost = (values) => {
    props.addPost(values.newText);
    console.log(values);
  };

  return (
    <div className={style.postblock}>
      <h2>My Post</h2>
      <AddNewPostForm onSubmit={addNewPost} />

      <div className={style.posts}>{postsElements}</div>
    </div>
  );
}

export default MyPosts;
