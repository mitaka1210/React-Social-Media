import React from 'react';
import style from './post.module.css';

function Post(props) {
  return (
    <div>
      <ul>
        <li className={`${style.post} ${style.bg}`}>
          {props.message}
          <img
            src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=793&q=80"
            alt=""
          />
        </li>
      </ul>
      <div>
        <span>Like</span>
      </div>
    </div>
  );
}

export default Post;
