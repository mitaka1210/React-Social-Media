import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './header.module.css';

function Header(props) {
  return (
    <header className={style.header}>
      <img
        src="https://images.unsplash.com/photo-1522139137660-4248e04955b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop"
        alt=""
      />

      <div className={style.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
}

export default Header;
