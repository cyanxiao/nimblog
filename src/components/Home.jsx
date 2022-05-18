import React, { useEffect, useState } from 'react';
import parse, { domToReact } from 'html-react-parser';
import 'heti/lib/heti.scss';
import { Link, Outlet } from 'react-router-dom';
import { atom, useAtom } from 'jotai';

const postsURLAtom = atom([]);

function Home({ homeHTML = '<h1>Your Blog</h1>' }) {
  const [home, setHome] = useState(<div>loading</div>);
  const fileNameRegex = /(?:[^/][\d\w.-]+)$(?<=(?:.md)|(?:.txt))/im;

  const [postsURL, setPostsURL] = useAtom(postsURLAtom);

  /**
   * replace <a> with <Link>
   */
  const options = {
    replace: ({ name, attribs, children }) => {
      if (name === 'a' && attribs.href && fileNameRegex.test(attribs.href)) {
        const regexResult = fileNameRegex.exec(attribs.href);
        const prevPostsURL = postsURL;
        prevPostsURL.push({
          url: attribs.url,
          fileName: regexResult[0].split('.')[0],
        });
        setPostsURL(prevPostsURL);
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
    setHome(homeElement);
  }, []);

  return (
    <div className="heti">
      {home}
      <Outlet />
    </div>
  );
}

export default Home;
export { postsURLAtom };
