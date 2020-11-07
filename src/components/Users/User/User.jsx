import React from 'react';
import styles from './user.module.css';
import userPhoto from '../../../assets//images/user.png';
import { NavLink } from 'react-router-dom';
function User({ user, followingInProgress, follow, unfollow }) {
  return (
    <div>
      <span>
        <div className={styles.usersPhoto}>
          <NavLink to={'/profile/' + user.id}>
            <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt='' />
          </NavLink>
        </div>

        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}>
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}>
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div> {user.status}</div>
        </span>
      </span>
      <span>
        <div>
          <div>{'user.location.country'}</div>
          <div>{'user.location.city'}</div>
        </div>
      </span>
    </div>
  );
}

export default User;
