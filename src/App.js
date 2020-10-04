import React from 'react';
import './App.css';
import {  Profile, News, Music, NavBar, Header } from './components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {
  //let ProfilePages = () => (
  //  <Profile
  //    profilePage={props.state.profilePage}
  //    addPost={props.addPost}
  //    updateNewPostText={props.updateNewPostText}
  //  />
  //);
  let NewsPage = () => <News />;

  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <NavBar />

        <div className="app-wrapper-content">
          {/*TODO: DIALOGS PAGE*/}
          <Route path="/dialogs"
                 render={()=> (
                     <DialogsContainer store={props.store}/>
                     )}
          />
         {/* TODO: PROFILE PAGE*/}
          <Route
            path="/profile"
            render={() => (
              <Profile store={props.store}/>
            )}
          />
          {/*<Route path="/profile" component={ProfilePages} />*/}
          <Route path="/news" render={NewsPage} />
          <Route path="/music" render={() => <Music />} />
        </div>
      </div>
    </Router>
  );
}

export default App;
