import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import parse, { domToReact } from 'html-react-parser';
import Home from './Home';
import Post from './Post';

function App({ homeHTML }) {
  const [home, setHome] = useState(<div>loading</div>);
  const fileNameRegex = /(?:[^/][\d\w.-]+)$(?<=(?:.md)|(?:.txt))/im;
  const [postsURL, setPostsURL] = useState([]);
  const postsURLInit = [];
  /**
   * replace <a> with <Link>
   */
  const options = {
    replace: ({ name, attribs, children }) => {
      if (name === 'a' && attribs.href && fileNameRegex.test(attribs.href)) {
        const regexResult = fileNameRegex.exec(attribs.href);
        postsURLInit.push({
          url: attribs.href,
          fileName: regexResult[0].split('.')[0],
        });
        return (
          <Link to={`/${regexResult[0].split('.')[0]}`}>
            {domToReact(children)}
          </Link>
        );
      }
    },
  };

  useEffect(() => {
    const homeElement = parse(homeHTML, options);
    setPostsURL(postsURLInit);
    setHome(homeElement);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home homeHTML={home} />}>
          {postsURL.map((postURL) => (
            <Route
              path={`${postURL.fileName}`}
              key={postURL.fileName}
              element={<Post postURL={postURL.url} />}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
