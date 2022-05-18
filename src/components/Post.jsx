import parse from 'html-react-parser';
import React, { useEffect, useState } from 'react';
import { getPostContent } from '../transform';

function Post({ postURL = '' }) {
  const [postContent, setPostContent] = useState('');
  useEffect(() => {
    getPostContent(postURL).then((value) => {
      setPostContent(value);
    });
  }, []);
  return postContent ? (
    <div className="heti">{parse(postContent)}</div>
  ) : (
    <div className="heti">loading</div>
  );
}

export default Post;
