import React, { useState } from 'react';
import parse, { domToReact } from 'html-react-parser';
import 'heti/lib/heti.scss';
import { Link, Route, Routes } from 'react-router-dom';
import { getPostContent } from '../transform';

const fileNameRegex = /(?:[^/][\d\w.-]+)$(?<=(?:.md)|(?:.txt))/im;

function Home({ homeHTML = '<h1>Your Blog</h1>' }) {
  const [posts, setPosts] = useState({});
  const postsHTML = {};
  const options = {
    replace: async ({ name, attribs, children }) => {
      if (name === 'a' && attribs.href && fileNameRegex.test(attribs.href)) {
        const regexResult = fileNameRegex.exec(attribs.href);
        postsHTML[regexResult[0]] = await getPostContent(attribs.href);
        setPosts(postsHTML);
        return <Link to={attribs.href}>{domToReact(children)}</Link>;
      }
    },
  };
  return (
    <div className="heti">
      <Routes>
        <Route path="/" element={parse(homeHTML, options)} />
      </Routes>
    </div>
  );
}

function Post({ postHTML = '<h1>Your Article</h1>' }) {
  return <div className="heti">{parse(postHTML)}</div>;
}

export default Home;
export { Post };
