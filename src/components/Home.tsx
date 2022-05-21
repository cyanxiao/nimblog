import React from 'react';
import 'heti/lib/heti.scss';
import { atom } from 'jotai';

const postsURLAtom = atom([]);

interface HomeProps {
  homeHTML: JSX.Element;
}

function Home({ homeHTML }: HomeProps): JSX.Element {
  return <div className="heti">{homeHTML}</div>;
}

export default Home;
export { postsURLAtom };
