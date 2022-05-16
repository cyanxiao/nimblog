import * as ReactDOM from 'react-dom/client';
import React from 'react';
import Home from './components/Home';

const rootNode = document.getElementById('menu');
const root = ReactDOM.createRoot(rootNode);

function renderBlog() {
  root.render(React.createElement(Home));
}

renderBlog();
