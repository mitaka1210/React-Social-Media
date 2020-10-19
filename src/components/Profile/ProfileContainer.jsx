import React from 'react';
import Profile from './Profile';
import {compose} from 'redux';
import {getUserProfile} from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import {withAuthRedirect} from '../HOC/withAuthRedirect';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
  }
  render() {

    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}


//let AuthRedirectComponent  = withAuthRedirect(ProfileContainer);



let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
 
});


//let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
//! Without compose
//export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);
export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withRouter,
  withAuthRedirect
) (ProfileContainer)
