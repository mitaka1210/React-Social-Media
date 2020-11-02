import React from 'react';
import Profile from './Profile';
import {compose} from 'redux';
import {getUserProfile,getStatus,updateStatus} from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import {withAuthRedirect} from '../HOC/withAuthRedirect';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      //Redirect ако не си логнат те връщам на login Page
      if (!userId) {
        this.props.hisotry.push('/login');
      }
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }
  render() {

    return (
      <div>
        <Profile {...this.props} 
          profile={this.props.profile} 
          status={this.props.status} 
          updateStatus= {this.props.updateStatus}/>
      </div>
    );
  }
}


//let AuthRedirectComponent  = withAuthRedirect(ProfileContainer);



let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
 
});


//let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
//! Without compose
//export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);
export default compose(
  connect(mapStateToProps, { getUserProfile,getStatus,updateStatus }),
  withRouter,
  withAuthRedirect
) (ProfileContainer)

