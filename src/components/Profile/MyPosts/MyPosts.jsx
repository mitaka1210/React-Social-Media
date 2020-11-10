import React from 'react';
import style from './myPosts.module.scss';
import Post from './Post/Post';
import { AddNewPostForm } from './PostFormRedux/PostFormRedux';

//! React.memo - за да не се правят излишни reRenders това е като shouldComponentUpdate.
//? shouldComponentUpdate -  React shouldComponentUpdate is a performance optimization method, and it tells React to avoid re-rendering a component, even if state or prop values may have changed. Only use this method if when a component will stay static or pure. The React shouldComponentUpdate method requires you to return a boolean value.

//? React.memo  - memo is a higher order component. If your component renders the same result given the same props, you can wrap it in a call to React. memo for a performance boost in some cases by memoizing the result. This means that React will skip rendering the component, and reuse the last rendered result.

const MyPosts = React.memo(function MyPosts(props) {
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
});

export default MyPosts;
