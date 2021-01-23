import React, { useContext, useState } from 'react';
import {
  Box, Input, Button, Icon
} from './style';
import { MovieContext } from '../../../context/movie/context';

export default () => {
  const [value, setValue] = useState('');
  const { searchMovie } = useContext(MovieContext);
  const searchHandler = () => {
    searchMovie(value.trim());
  };
  return (
    <Box>
      <Button>
        <Icon />
      </Button>
      <Input
        type="input"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyUp={searchHandler}
        placeholder="search"
      />
    </Box>
  );
};
