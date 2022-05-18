import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useAtom } from 'jotai';
import Home, { postsURLAtom } from './Home';
import Post from './Post';

function App({ homeHTML }) {
  const [postsURL] = useAtom(postsURLAtom);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home homeHTML={homeHTML} />}>
          {postsURL.map((postURL) => (
            <Route
              path={postURL.fileName}
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
