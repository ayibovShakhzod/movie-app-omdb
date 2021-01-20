import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Box, Input, Button, Icon
} from './style';
import movie from '../../../services/movie';
import { setMovies } from '../../../redux/modules/movies/actions';

export default () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  // const [typingTimeOut, setTypingTimeOut] = useState(0);

  const handleSearch = (e) => {
    setValue(e.target.value);
    if (value && value.length > 0) {
      Promise.all([
        movie.searchMovies(value)
      ]).then(([allMovies]) => {
        dispatch(setMovies(allMovies.Search));
      });
    }
  };

  return (
    <Box>
      <Button>
        <Icon />
      </Button>
      <Input
        type="input"
        value={value}
        onChange={handleSearch}
        placeholder="search"
      />
    </Box>
  );
};
