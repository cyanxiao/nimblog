import React from 'react';
import parse, { domToReact } from 'html-react-parser';
import 'heti/lib/heti.scss';
import { Link, BrowserRouter } from 'react-router-dom';
import { getPostContent } from '../transform';

const fileNameRegex = /(?:[^/][\d\w.]+)$(?<=(?:.md)|(?:.txt))/gim;

const options = {
  replace: ({ name, attribs, children }) => {
    if (name === 'a' && attribs.href && fileNameRegex.test(attribs.href)) {
      getPostContent({}, attribs.href);
      return <Link to={attribs.href}>{domToReact(children)}</Link>;
    }
  },
};

function Home({ homeHTML = '<h1>Your Blog</h1>' }) {
  return (
    <BrowserRouter>
      <div className="heti">{parse(homeHTML, options)}</div>
    </BrowserRouter>
  );
}

export default Home;
