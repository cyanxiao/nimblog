import React from 'react';
import parse from 'html-react-parser';
import 'heti/lib/heti.scss';

function Home({ homeHTML = '<h1>Your Blog</h1>' }) {
  return <div className="heti">{parse(homeHTML)}</div>;
}

export default Home;
