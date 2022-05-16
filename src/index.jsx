import * as ReactDOM from 'react-dom/client';
import React from 'react';
import Home from './components/Home';

const rootNode = document.body;
const root = ReactDOM.createRoot(rootNode);

root.render(<Home title="hello" />);
