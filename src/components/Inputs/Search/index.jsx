import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Box, Input, Button, Icon
} from './style';
import { setSearchValue } from '../../../redux/modules/movies/actions';

export default () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState();

  const handleSearch = (e) => {
    dispatch(setSearchValue(e.target.value));
    setValue(e.target.value);
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
