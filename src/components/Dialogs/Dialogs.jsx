import React from 'react';
import style from './dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <div>
      <ul>
        <li className={style.dialog + ' ' + style.active}>
          {' '}
          <NavLink to={path}>{props.name}</NavLink>
        </li>
      </ul>
    </div>
  );
};

const Message = (props) => {
  return <div className={style.message}>{props.message}</div>;
};

function Dialogs(props) {
  let dialogsData = [
    {
      id: 1,
      name: 'Dimitar',
    },
    {
      id: 2,
      name: 'Aleksandar',
    },
    { id: 3, name: 'Pesho' },
    {
      id: 4,
      name: 'Gosho',
    },
    {
      id: 5,
      name: 'Ivan',
    },
    { id: 6, name: 'Dragan' },
    {
      id: 7,
      name: 'Petkan',
    },
    { id: 8, name: 'Ivailo' },
    {
      id: 9,
      name: 'Mitko',
    },
  ];
  let messagesData = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How is your it-kamasutra?' },
    { id: 3, message: 'Where we go today?' },
    { id: 5, message: 'What is your plan for today?' },
    { id: 6, message: 'Yo' },
    { id: 7, message: 'U are beatify' },
    { id: 8, message: 'I am lazy' },
    { id: 9, message: 'I am too much stupid' },
  ];
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        {['sss', 'sssd', 'fffeee']}
        {/*<DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />*/}
      </div>
      <div className={style.messages}>
        {/*<Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />*/}
      </div>
    </div>
  );
}

export default Dialogs;
