import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, Block } from './style';

import Home from '../../views/Home';
import Movie from '../../views/Movie';
import Navbar from '../../components/Navbar';

export default () => (
  <Block>
    <Navbar />
    <Container>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/movie/:id" component={Movie} />
      </Switch>
    </Container>
  </Block>
);
