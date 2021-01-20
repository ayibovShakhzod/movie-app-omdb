import React from 'react';
import { Navbar, Logo } from './style';
import SearchInput from '../Inputs/Search';

export default () => (
  <Navbar>
    <Logo>MOVIE info</Logo>
    <SearchInput />
  </Navbar>
);
