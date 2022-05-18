import parse from 'html-react-parser';
import React from 'react';

function Post({ postHTML = '<h1>Your Article</h1>' }) {
  return <div className="heti">{parse(postHTML)}</div>;
}

export default Post;
