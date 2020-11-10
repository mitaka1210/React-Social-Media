import Dialogs from './Dialogs';
import { sendMessageCreator } from '../../redux/dialogs-reducer';
import { withAuthRedirect } from '../HOC/withAuthRedirect';
import { connect } from 'react-redux';
import { compose } from 'redux';
let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageCreator(newMessageBody));
    },
  };
};

//let AuthRedirectComponent  = withAuthRedirect(Dialogs);
//! Without compose
//const SupperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);
