import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './Data/Data';
import App from './App';

// import { addPost, subscribe, updateNewPostText } from './Data/Data';

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
    </React.StrictMode>,
    document.getElementById('root'),
  );
};
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
