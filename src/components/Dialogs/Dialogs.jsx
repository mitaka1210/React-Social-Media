import React from 'react';
import style from './dialogs.module.css';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Data/Data";

function Dialogs(props) {

  let state = props.store.getState().dialogsPage;
  let dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
  let messagesElements = state.messages.map((m) => <Message message={m.message} />);
  let newMessageBody = state.newMessageBody;




  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
};

    let onNewMessageChange = (e) => {
      let body = e.target.value;
      const ff = updateNewMessageBodyCreator(body);
      props.store.dispatch(ff);
};
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElements}</div>
          <div className={style.messages}>
              <div>{messagesElements}</div>
              <div>
                  <div>
                      <textarea
                          value={newMessageBody}
                          onChange={onNewMessageChange}
                          placeholder='Enter your message' >
                       </textarea>
                  </div>
                  <div>
                      <button onClick={onSendMessageClick}>Send</button>
                  </div>
              </div>
          </div>
    </div>
    
  );
}

export default Dialogs;
