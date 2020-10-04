import React from 'react';
import './App.css';
import {  Profile, News, Music, NavBar, Header } from './components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App() {

  let NewsPage = () => <News />;

  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <NavBar />

        <div className="app-wrapper-content">
          {/*TODO: DIALOGS PAGE*/}
          <Route path="/dialogs"
                 render={()=> (<DialogsContainer />)}/>
         {/* TODO: PROFILE PAGE*/}
          <Route
            path="/profile"
            render={() => (<Profile />)}/>

          <Route path="/news" render={NewsPage} />
          <Route path="/music" render={() => <Music />} />
        </div>
      </div>
    </Router>
  );
}

export default App;
