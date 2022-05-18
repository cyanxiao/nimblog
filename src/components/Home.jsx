import React, { useEffect, useState } from 'react';
import parse, { domToReact } from 'html-react-parser';
import 'heti/lib/heti.scss';
import { Link, Route, Routes, Outlet } from 'react-router-dom';
import { getPostContent } from '../transform';

function Home({ homeHTML = '<h1>Your Blog</h1>' }) {
  const [posts, setPosts] = useState([]);
  const [home, setHome] = useState(<div>loading</div>);

  const fileNameRegex = /(?:[^/][\d\w.-]+)$(?<=(?:.md)|(?:.txt))/im;
  const postsHTML = [];
  const options = {
    replace: ({ name, attribs, children }) => {
      if (name === 'a' && attribs.href && fileNameRegex.test(attribs.href)) {
        const regexResult = fileNameRegex.exec(attribs.href);
        getPostContent(attribs.href).then((postContent) => {
          postsHTML.push({
            url: regexResult[0].split('.')[0],
            content: postContent,
          });
          setPosts(postsHTML);
          return (
            <Link to={`/${regexResult[0].split('.')[0]}`}>
              {domToReact(children)}
            </Link>
          );
        });
      }
    },
  };

  useEffect(() => {
    const homeElement = parse(homeHTML, options);
    setHome(homeElement);
  }, []);

  return (
    <div className="heti">
      <Routes>
        <Route path="/" element={home} />
        {posts.map((post) => (
          <Route
            key={post.url}
            path={post.url}
            element={<Post postHTML={post.content} />}
          />
        ))}
      </Routes>
      <Outlet />
    </div>
  );
}

function Post({ postHTML = '<h1>Your Article</h1>' }) {
  return <div className="heti">{parse(postHTML)}</div>;
}

export default Home;
export { Post };
