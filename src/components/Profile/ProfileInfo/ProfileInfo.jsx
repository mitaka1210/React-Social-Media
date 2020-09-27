import React from 'react';
import style from './profileinfo.module.css';
function ProfileInfo() {
  return (
    <>
      <div>
        <img
          src="https://images.unsplash.com/photo-1585058180482-0de06c426133?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop"
          alt=""
        />
      </div>
      <div className={style.descriptionBlock}>ava + description</div>
    </>
  );
}

export default ProfileInfo;
