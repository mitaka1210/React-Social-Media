import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

let mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth,
});

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) {
        return <Redirect to="/login" />;
      }
      return <Component {...this.props} />;
    }
  }
  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
  return ConnectedAuthRedirectComponent;
};

//! DONT WORK need UNDERSTAND

//export const withAuthRedirect = (Component) => {
//  const RedirectComponent = (props) => {
//    if (!props.isAUth) {
//      return <Redirect to="/login" />;
//    }
//    return <Component {...props} />;
//  };
//  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

//  return ConnectedAuthRedirectComponent;
//};
// (props) => {
//      //TODO: краткия запис на (this.props.isAuth === false) е
//    //TODO: (!this.props.isAuth )
//    if (this.props.isAuth === false){
//      return (
//        <>
//            <Redirect to={'/login'} />
//            <ProfileContainer {...props} />
//        </>
//      )};
