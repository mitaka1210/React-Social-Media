import React from 'react';
import Dialogs from './Dialogs';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import StoreContext from "../../StoreContext";


function DialogsContainer() {

    return <StoreContext.Consumer>
      {
        ( store) => {
            let onSendMessageClick = () => {
              store.dispatch(sendMessageCreator());
            };

            let onNewMessageChange = (body) => {

              const action = updateNewMessageBodyCreator(body);
              store.dispatch(action);
            }
            return(
                <Dialogs updateNewMessageBody={onNewMessageChange}
                sendMessage={onSendMessageClick}
                dialogsPage={store.getState().dialogsPage}/>
                )
             }
      }
    </StoreContext.Consumer>
}

export default DialogsContainer;