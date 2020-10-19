import React from 'react';
import style from './dialogs.module.css';
import {Redirect} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


function Dialogs(props) {

  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} key={d.id}  id={d.id} />);
  let messagesElements = state.messages.map((m) => <Message message={m.message} key={m.id} />);
  let newMessageBody = state.newMessageBody;




  let onSendMessageClick = () => {
    props.sendMessage();
};

    let onNewMessageChange = (e) => {
      let body = e.target.value;
   props.updateNewMessageBody(body);
};
//! проверяваме да ли сме логнати 
    //TODO: краткия запис на (props.isAuth === false) е
    //TODO: (!props.isAuth )
    if (props.isAuth === false){
      return <Redirect to={'/login'} />
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
