import * as ReactDOM from 'react-dom/client';
import React from 'react';
import getHomeHTML from './transform';
import App from './components/App';

const rootNode = document.body;
rootNode.style.whiteSpace = 'pre-wrap';
const root = ReactDOM.createRoot(rootNode);
const homeHTML = getHomeHTML(document.body);

root.render(<App homeHTML={homeHTML} />);
