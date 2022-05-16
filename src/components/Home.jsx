import React from 'react';
import parse from 'html-react-parser';

function Home({ homeHTML = '<h1>Your Blog</h1>' }) {
  return <div>{parse(homeHTML)}</div>;
}

export default Home;
