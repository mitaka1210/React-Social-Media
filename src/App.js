import React from 'react';
import './App.css';
import {
  News,
  Users,
  ProfileContainer,
  HeaderContainer,
  DialogsContainer,
  UsersContainer,
  Music,
  NavBar,
} from './components';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  let NewsPage = () => <News />;

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
          <Route path="/news" render={NewsPage} />
          <Route path="/music" render={() => <Music />} />
        </div>
      </div>
    </Router>
  );
}

export default App;
