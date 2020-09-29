import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import state from './Data/Data';
import App from './App';

import { addPost, subscribe, updateNewPostText } from './Data/Data';

let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
    </React.StrictMode>,
    document.getElementById('root'),
  );
};
rerenderEntireTree(state);
subscribe(rerenderEntireTree);
