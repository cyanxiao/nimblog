import parse from 'html-react-parser';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPostContent } from '../transform';
import 'heti/lib/heti.scss';

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
    <div className="heti post" id="post-frame">
      {parse(postContent)}
      <Link to="/" className="back">
        Back
      </Link>
    </div>
  ) : (
    <div className="heti post">loading</div>
  );
}

export default Post;
