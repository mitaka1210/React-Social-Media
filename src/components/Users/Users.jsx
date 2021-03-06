import React from 'react';
import styles from './users.module.scss';

import User from './User/User';
import PaginationPages from '../common/PaginationPage/PaginationPages';

// TODO: SERVER GET/POST/CRUD(CREATE_READE_UPDATE_DELETE);

function Users({
  currentPage,
  Follow,
  Unfollow,
  totalUsersCount,
  users,
  onPageChanged,
  pageSize,
  ...props
}) {
  //! Разделяме всичките абонати на колко ще се покзват на една страница и получаме страниците колко ще бъдат на брой. Настройката на pageSize(брой хора на една страница е правим в  user-reducer).

  //let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  //let pages = [];

  //for (let i = 1; i <= pagesCount; i++) {
  //  pages.push(i);
  //}
  //  pagesCount.forEach( e=>{
  //     pages.push(e);
  // })

  return (
    <div className={styles.mainContainer}>
      {/*<div className={styles.pageNum}>
        {pages.map((p) => {
          return (
            <span
              key={p.id}
              className={props.currentPage === p ? styles.selectedPAge : null}
              onClick={(e) => {
                props.onPageChanged(p);
              }}>
              {p}
            </span>
          );
        })}
      </div>*/}

      {users.map((u) => (
        <User
          user={u}
          followingInProgress={props.followingInProgress}
          unfollow={props.unfollow}
          follow={props.follow}
          key={u.id}
        />

        //<div key={u.id}>
        //  <span>
        //    <div className={styles.usersPhoto}>
        //      <NavLink to={'/profile/' + u.id}>
        //        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt='' />
        //      </NavLink>
        //    </div>

        //    <div>
        //      {u.followed ? (
        //        <button
        //          disabled={props.followingInProgress.some((id) => id === u.id)}
        //          onClick={() => {
        //            props.unfollow(u.id);
        //          }}>
        //          Unfollow
        //        </button>
        //      ) : (
        //        <button
        //          disabled={props.followingInProgress.some((id) => id === u.id)}
        //          onClick={() => {
        //            props.follow(u.id);
        //          }}>
        //          Follow
        //        </button>
        //      )}
        //    </div>
        //  </span>
        //  <span>
        //    <span>
        //      <div>{u.name}</div>
        //      <div> {u.status}</div>
        //    </span>
        //  </span>
        //  <span>
        //    <div>
        //      <div>{'u.location.country'}</div>
        //      <div>{'u.location.city'}</div>
        //    </div>
        //  </span>
        //</div>
      ))}
      <PaginationPages
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
      />
    </div>
  );
}

export default Users;
// TODO:Създаме два бутона за follow unfollow връзваме ги към сървъра и всеки път
//TODO: катоискаме да follow или unfollow от правяме въпрос до сървъра ключовете се генерират от account на сървъра API-KEY
