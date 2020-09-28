import React from 'react';
import style from './profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
  debugger;
  return (
    <main>
      <div>
        <ProfileInfo />
        <MyPosts posts={props.posts} />
      </div>
    </main>
  );
}

export default Profile;
