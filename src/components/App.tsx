import React, { useEffect, useState } from 'react';
import { Link, Route, Routes, HashRouter } from 'react-router-dom';
import parse, { domToReact, HTMLReactParserOptions } from 'html-react-parser';
import Home from './Home';
import Post from './Post';

interface AppProps {
  homeHTML: string;
}

function App({ homeHTML }: AppProps): JSX.Element {
  const [home, setHome] = useState(<div>loading</div>);
  const fileNameRegex = /(?:[^/][\d\w.-]+)((?:.md)|(?:.txt))$/im;
  const [postsURL, setPostsURL] = useState([]);
  const postsURLInit: {
    url: string;
    fileName: string;
  }[] = [];
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
    const homeElement = parse(
      homeHTML,
      options as HTMLReactParserOptions
    ) as JSX.Element;
    setPostsURL(postsURLInit);
    setHome(homeElement);
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home homeHTML={home} />} />
        {postsURL.map((postURL) => (
          <Route
            path={`${postURL.fileName}`}
            key={postURL.fileName}
            element={<Post postURL={postURL.url} />}
          />
        ))}
      </Routes>
    </HashRouter>
  );
}

export default App;
