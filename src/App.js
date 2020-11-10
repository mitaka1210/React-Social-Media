//*library

import React, { Component } from 'react';
import styles from './App.module.scss';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer.js';
import { Route, withRouter, Switch } from 'react-router-dom';

//*Components Import

import {
  News,
  Login,
  ProfileContainer,
  HeaderContainer,
  //DialogsContainer,
  UsersContainer,
  Music,
  NavBar,
} from './components';
import Preloader from './components//common/Preloader/Preloader.jsx';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
class App extends Component {
  //componentDidMount() {
  //  this.props.getAuthUserData();
  //}
  catchAllErrors = (promiseRejectionEvent) => {
    alert('some error occured');
    console.error(promiseRejectionEvent);
  };
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener('unhandledrejection', this.catchAllErrors);
  }
  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllErrors);
  }
  render() {
    //if (!this.props.initialized) {
    //  return <Preloader />;
    //}

    return (
      <div className={styles.appWrapper}>
        <HeaderContainer />
        <NavBar />
        <React.Suspense fallback={<Preloader />}>
          {this.props.initialized ? (
            <div className={styles.appWrapperContent}>
              <Switch>
                {/*TODO: DIALOGS PAGE*/}
                <Route path='/dialogs' render={() => <DialogsContainer />} />
                {/* TODO: PROFILE PAGE*/}

                <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                <Route path='/users' render={() => <UsersContainer />} />
                <Route path='/login' render={() => <Login />} />
                {/* <Route path="/news" render={NewsPage} /> */}
                {/*<Route path='/music' render={() => <Music />} />
                 */}
              </Switch>
            </div>
          ) : (
            <Preloader />
          )}
        </React.Suspense>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});
//export default compose(withRouter, connect(null, { getAuthUserData }))(App);
export default compose(connect(mapStateToProps, { initializeApp }), withRouter)(App);

//const AppMain = () => {
//  return (
//    <Router>
//      <Provider store={store}>
//        <AppContainer />
//      </Provider>
//    </Router>
//  );
//};
//export default AppMain;
