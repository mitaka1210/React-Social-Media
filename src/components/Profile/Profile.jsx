import React from 'react';
import style from './profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile() {
  return (
    <main>
      <div>
        <ProfileInfo />
        <MyPosts />
      </div>
    </main>
  );
}

export default Profile;
