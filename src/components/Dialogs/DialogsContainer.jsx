import React from 'react';
import Dialogs from './Dialogs';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";


import {connect} from "react-redux";

// function DialogsContainer() {
//
//     return <StoreContext.Consumer>
//       {
//         ( store) => {
//             let onSendMessageClick = () => {
//               store.dispatch(sendMessageCreator());
//             };
//
//             let onNewMessageChange = (body) => {
//
//               const action = updateNewMessageBodyCreator(body);
//               store.dispatch(action);
//             }
//             return(
//                 <Dialogs updateNewMessageBody={onNewMessageChange}
//                 sendMessage={onSendMessageClick}
//                 dialogsPage={store.getState().dialogsPage}/>
//                 )
//              }
//       }
//     </StoreContext.Consumer>
// }
let mapStateToProps = (state) => {
    return{
       dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps =(dispatch) => {
    return{
        updateNewMessageBody: (body) => {
            const action = updateNewMessageBodyCreator(body);
            dispatch(action);
        },
        sendMessage: ()=> {
            dispatch(sendMessageCreator());

        }
    }
}

const SupperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default SupperDialogsContainer;