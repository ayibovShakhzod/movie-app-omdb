import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../views/Home';
import Movie from '../../views/Movie';

export default () => (
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/movie/:id" component={Movie} />
  </Switch>
);
