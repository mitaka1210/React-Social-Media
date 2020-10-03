import React from 'react';
import './App.css';
import { Dialogs, Profile, News, Music, NavBar, Header } from './components';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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

          <Route path="/dialogs" render={()=> <Dialogs store={props.store}/>} />

          <Route
            path="/profile"
            render={() => (
              <Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}

              />
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
