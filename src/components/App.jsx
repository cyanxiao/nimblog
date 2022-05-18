import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';

function App({ homeHTML }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home homeHTML={homeHTML} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
