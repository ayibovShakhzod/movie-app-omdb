import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, Block } from './style';

import Home from '../../views/Home';
import Movie from '../../views/Movie';

export default () => (
  <Block>
    <Container>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/movie/:id" component={Movie} />
      </Switch>
    </Container>
  </Block>
);
