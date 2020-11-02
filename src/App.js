import React, { Component } from 'react';
import './App.css';
import {
  News,
  Login,
  ProfileContainer,
  HeaderContainer,
  DialogsContainer,
  UsersContainer,
  Music,
  NavBar,

} from './components';
import  Preloader from './components//common/Preloader/Preloader.jsx';
import { connect } from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from './redux/app-reducer.js';

import { BrowserRouter as Router , Route ,withRouter} from 'react-router-dom';




class App extends Component {
    componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
       return <Preloader/>
    }
       
    return (
        
<Router>
      <div className="app-wrapper">
        <HeaderContainer />
        <NavBar />

        <div className="app-wrapper-content">
          {/*TODO: DIALOGS PAGE*/}
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          {/* TODO: PROFILE PAGE*/}

          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          {/* <Route path="/news" render={NewsPage} /> */}
          <Route path="/music" render={() => <Music />} />
          <Route path="/login" render={() => <Login />} />
        </div>
      </div>

      </Router>
    )
  }
}
let mapStateToProps = (state) => ({

  initialized: state.app.initialized,
  
 
});

export default connect(mapStateToProps, {initializeApp})(App);