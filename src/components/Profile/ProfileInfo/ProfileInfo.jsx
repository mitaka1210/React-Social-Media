import React from 'react';
import style from './profileinfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusF from '../Status/ProfileStatusF';

function ProfileInfo(props) {
  //! Aко липсва profile се показва Preloader  иначе се рисува снимката която се взема от server = profile.photos.large/small
  if (!props.profile) {
    return (
      <div>
        <img
          src='https://images.unsplash.com/photo-1585058180482-0de06c426133?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop'
          alt=''
        />
        <ProfileStatusF status={props.status} updateStatus={props.updateStatus} />
      </div>
    );
  } else {
    return <Preloader />;
  }

  return (
    <>
      {/*<div>
        <img
          src="https://images.unsplash.com/photo-1585058180482-0de06c426133?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop"
          alt=""
        />
      </div>*/}
      <div className={style.descriptionBlock}>
        <img src={props.profile.photos.large} alt='' />
        ava + description
        <ProfileStatusF status={props.status} updateStatus={props.updateStatus} />
      </div>
      <div className={style.infoUser}>
        <span>{props.profile.aboutMe}</span>
        <span className={style.FBContact}>{props.profile.contacts.facebook}</span>
        <span className={style.FBContact}>{props.profile.fullName}</span>
        <span className={style.FBContact}>{props.profile.lookingForAJobDescription}</span>
      </div>
    </>
  );
}

export default ProfileInfo;
