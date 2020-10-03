import React from 'react';
import style from './../dialogs.module.css';
import { NavLink } from 'react-router-dom';

function DialogItem(props) {
  let path = '/dialogs/' + props.id;

  return (
    <div>
      <ul>
        <li className={style.dialog + ' ' + style.active}>

          <NavLink to={path}>{props.name}</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default DialogItem;
