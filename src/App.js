import React from 'react';
import './App.css';
import { ProfileContainer, News, Users, Music, NavBar, Header } from './components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

function App() {
  let NewsPage = () => <News />;

  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <NavBar />

        <div className="app-wrapper-content">
          {/*TODO: DIALOGS PAGE*/}
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          {/* TODO: PROFILE PAGE*/}
          <Route path="/profile" render={() => <ProfileContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/news" render={NewsPage} />
          <Route path="/music" render={() => <Music />} />
        </div>
      </div>
    </Router>
  );
}

export default App;
