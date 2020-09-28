import React from 'react';
import './App.css';
import { Dialogs, Profile, News, Music, NavBar, Header } from './components';
import { BrowserRouter as Router, Route } from 'react-router-dom';

let NewsPage = () => <News />;

function App(props) {
  let ProfilePage = () => <Profile posts={props.posts} />;
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => <Dialogs dialogs={props.dialogs} messages={props.messages} />}
          />

          <Route path="/profile" component={ProfilePage} />
          <Route path="/news" render={NewsPage} />
          <Route path="/music" render={() => <Music />} />
        </div>
      </div>
    </Router>
  );
}

export default App;
