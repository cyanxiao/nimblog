import * as ReactDOM from 'react-dom/client';
import React from 'react';
import Home from './components/Home';
import getHomeHTML from './transform';

const rootNode = document.body;
rootNode.style.whiteSpace = 'pre-wrap';
const root = ReactDOM.createRoot(rootNode);
const homeHTML = getHomeHTML(document.body);

root.render(<Home homeHTML={homeHTML} />);
