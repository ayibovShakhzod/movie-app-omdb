import types from '../../../constants/action-types';

export const setMovie = (movie) => ({
  type: types.SET_MOVIE,
  movie
});

export const setMovies = (movies) => ({
  type: types.SET_MOVIES,
  movies
});

export const setSearchValue = (searchValue) => ({
  type: types.SEARCH_VALUE,
  searchValue
});
