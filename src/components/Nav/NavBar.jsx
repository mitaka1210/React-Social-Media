import React from 'react';
import style from './nav.module.css';
import { BrowserRouter as Router, NavLink, Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className={style.nav}>
      <ul className={style.items}>
        <li className={style.item}>
          <NavLink activeClassName={style.activeLink} to="/profile">
            Profile
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink to="/dialogs" activeClassName={style.activeLink}>
            Messages
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink to="/news" activeClassName={style.active}>
            News
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink to="/music" activeClassName={style.activeLink}>
            Music
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink to="/settings" activeClassName={style.activeLink}>
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
