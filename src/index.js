import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';

import store from './redux/redux-store';
import { BrowserRouter as Router } from 'react-router-dom';
import './App';

ReactDOM.render(
  <StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </StrictMode>,

  document.getElementById('root'),
);
