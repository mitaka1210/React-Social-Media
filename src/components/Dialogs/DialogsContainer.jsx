import React from 'react';
import style from './dialogs.module.css';
import Dialogs from './Dialogs';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";


function DialogsContainer(props) {

  let state = props.store.getState().dialogsPage;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
};

    let onNewMessageChange = (body) => {

      const action = updateNewMessageBodyCreator(body);
      props.store.dispatch(action);
};
  return (
    <Dialogs
        updateNewMessageBody = {onNewMessageChange}
        sendMessage={onSendMessageClick}
        dialogsPage={state}
    />
    
  );
}

export default DialogsContainer;
