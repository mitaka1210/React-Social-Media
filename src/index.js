import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { dialogs, messages, posts } from './Data/Data';

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root'),
);
