import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import './index.css';
import store from './redux/redux-store';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
