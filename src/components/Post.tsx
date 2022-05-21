import parse from 'html-react-parser';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPostContent } from '../transform';

interface PostProps {
  postURL: string;
}

function Post({ postURL = '' }: PostProps): JSX.Element {
  const [postContent, setPostContent] = useState('');
  useEffect(() => {
    getPostContent(postURL).then((value) => {
      setPostContent(value);
    });
  }, []);
  return postContent ? (
    <div className="heti">
      <Link to="/">Back</Link>
      {parse(postContent)}
    </div>
  ) : (
    <div className="heti">loading</div>
  );
}

export default Post;
