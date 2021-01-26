import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../container/App';
import MovieState from '../context/movie/state';

export default () => (
  <MovieState>
    <Router>
      <App />
    </Router>
  </MovieState>
);
