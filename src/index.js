import * as ReactDOM from 'react-dom/client';
import React from 'react';
import Home from './components/Home';

const rootNode = document.body;
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(Home));

export default function hello() {
  console.log('hello');
}
