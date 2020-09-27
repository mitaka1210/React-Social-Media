import React from 'react';

import './App.css';
import { Dialogs, Profile, News, Music, NavBar, Header } from './components';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header/>
        <NavBar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/profile" component={Profile} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />

        </div>
      </div>
    </Router>
  );
}

export default App;
