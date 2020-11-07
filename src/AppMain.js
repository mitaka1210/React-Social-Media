import React from 'react';
import { Provider } from 'react-redux';
import './index.css';
import store from './redux/redux-store';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

function AppMain() {
  return (
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  );
}

export default AppMain;
