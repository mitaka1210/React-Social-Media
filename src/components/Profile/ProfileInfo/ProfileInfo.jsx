import React from 'react';
import style from './profileinfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

function ProfileInfo(props) {
  //! Aко липсва profile се показва Preloader  иначе се рисува снимката която се взема от server = profile.photos.large/small
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <>
      <div>
        <img
          src="https://images.unsplash.com/photo-1585058180482-0de06c426133?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop"
          alt=""
        />
      </div>
      <div className={style.descriptionBlock}>
        <img src={props.profile.photos.large} alt="" />
        ava + description
      </div>
      <div className={style.bbb}>
        <span>{props.profile.aboutMe}</span>
        <span className={style.FBContact}>{props.profile.contacts.facebook}</span>
      </div>
    </>
  );
}

export default ProfileInfo;
