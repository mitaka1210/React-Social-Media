import React from 'react';
import styles from './users.module.scss';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';

function UsersF(props) {
  // TODO: Ако users  са равни на 0 влизаме добавяме ги и после рисуваме страницата. Ако не са просто ги рисуваме и спираме грешката.f
  if (props.users.length === 0) {
    // TODO: Въпрос на сървъра
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')

      .then((response) => {
        props.setUsers(response.data.items);
      });

    // props.setUsers([
    //     {
    //         id: 1,
    //         followed: false,
    //         photoUrl: 'https://futbolita.com/wp-content/uploads/2008/11/avatar-1577909_960_720.png',
    //         fullName: 'Dimitar',
    //         status: 'I am a boss',
    //         location: {
    //             city: 'Shumen',
    //             country: 'Bulgaria'
    //         }
    //     },
    //     {
    //         id: 2,
    //         followed: true,
    //         photoUrl: 'https://futbolita.com/wp-content/uploads/2008/11/avatar-1577909_960_720.png',
    //         fullName: 'Aleksandar',
    //         status: 'I am a boss',
    //         location: {city: 'Varna', country: 'Bulgaria'}
    //     },
    //     {
    //         id: 3,
    //         followed: false,
    //         photoUrl: 'https://futbolita.com/wp-content/uploads/2008/11/avatar-1577909_960_720.png',
    //         fullName: 'Pesho',
    //         status: 'I am a boss',
    //         location: {city: 'Sofia', country: 'Bulgaria'}
    //     },
    //     {
    //         id: 4,
    //         followed: false,
    //         photoUrl: 'https://futbolita.com/wp-content/uploads/2008/11/avatar-1577909_960_720.png',
    //         fullName: 'Gosho',
    //         status: 'I am a boss',
    //         location: {city: 'Plovdiv', country: 'Bulgaria'}
    //     },
    //     {
    //         id: 5,
    //         followed: false,
    //         photoUrl: 'https://futbolita.com/wp-content/uploads/2008/11/avatar-1577909_960_720.png',
    //         fullName: 'Ivan',
    //         status: 'I am a boss',
    //         location: {city: 'Pleven', country: 'Bulgaria'}
    //     },
    //     {
    //         id: 6,
    //         followed: false,
    //         photoUrl: 'https://futbolita.com/wp-content/uploads/2008/11/avatar-1577909_960_720.png',
    //         fullName: 'Marin',
    //         status: 'I am a boss',
    //         location: {city: 'Yambol', country: 'Bulgaria'}
    //     }
    // ])
  }
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div className={styles.usersPhoto}>
              <img src={u.photos.small != null ? u.photos.small : userPhoto} alt='' />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}>
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}>
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div> {u.status}</div>
            </span>
          </span>
          <span>
            <div>
              <div>{'u.location.country'}</div>
              <div>{'u.location.city'}</div>
            </div>
          </span>
        </div>
      ))}
    </div>
  );
}

export default UsersF;
