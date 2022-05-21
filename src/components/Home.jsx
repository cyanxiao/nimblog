import React from 'react';
import 'heti/lib/heti.scss';
import { Outlet } from 'react-router-dom';
import { atom } from 'jotai';

const postsURLAtom = atom([]);

function Home({ homeHTML = '<h1>Your Blog</h1>' }) {
  return (
    <div className="heti">
      {homeHTML}
      <Outlet />
    </div>
  );
}

export default Home;
export { postsURLAtom };
