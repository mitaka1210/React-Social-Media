import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
// TODO: SERVER GET/POST/CRUD(CREATE_READE_UPDATE_DELETE);
import * as axios from 'axios';
function Users(props) {
  //! Разделяме всичките абонати на колко ще се покзват на една страница и получаме страниците колко ще бъдат на брой. Настройката на pageSize(брой хора на една страница е правим в  user-reducer).

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  //  pagesCount.forEach( e=>{
  //     pages.push(e);
  // })

  return (
    <div className={styles.mainContainer}>
      <div className={styles.pageNum}>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p ? styles.selectedPAge : null}
              onClick={(e) => {
                props.onPageChanged(p);
              }}>
              {p}
            </span>
          );
        })}
      </div>

      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div className={styles.usersPhoto}>
              <NavLink to={'/profile/' + u.id}>
                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" />
              </NavLink>
            </div>

            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    axios
                      .delete(
                        `https://social-network.samuraijs.com/api/1.0/follow/
                        ${u.id}`,

                        {
                          withCredentials: true,
                          headers: {
                            'API-KEY': '64c581f4-8246-4c7e-b42d-06402768460a',
                          },
                        },
                      )

                      .then((response) => {
                        if (response.data.resultCode == 0) {
                          props.follow(u.id);
                        }
                      });
                    props.unfollow(u.id);
                  }}>
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow/
                        ${u.id}`,
                        {},
                        {
                          withCredentials: true,
                          headers: {
                            'API-KEY': '64c581f4-8246-4c7e-b42d-06402768460a',
                          },
                        },
                      )

                      .then((response) => {
                        if (response.data.resultCode == 0) {
                          props.follow(u.id);
                        }
                      });
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

export default Users;
// TODO:Създаме два бутона за follow unfollow връзваме ги към сървъра и всеки път
//TODO: катоискаме да follow или unfollow от правяме въпрос до сървъра ключовете се генерират от account на сървъра API-KEY
