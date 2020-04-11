import React from 'react';
import ReactDOM from 'react-dom';
import CompReact from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CompReact />, div);
  ReactDOM.unmountComponentAtNode(div);
});
