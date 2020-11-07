import React from 'react';
import ReactDOM from 'react-dom';
import AppMain from './AppMain';

it('render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppMain />, div);
  ReactDOM.unmountComponentAtNode(div);
});
