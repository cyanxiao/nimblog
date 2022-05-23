import React from 'react';
import '../themes/default.css';
import 'heti/lib/heti.scss';

interface HomeProps {
  homeHTML: JSX.Element;
}

function Home({ homeHTML }: HomeProps): JSX.Element {
  return (
    <div className="heti home" id="home-frame">
      {homeHTML}
    </div>
  );
}

export default Home;
