import types from '../../../constants/action-types';

const initialState = {
  movie: {},
  movies: [],
  searchValue: 'Mine'
};

const map = {
  [types.SET_MOVIE]: (state, { movie }) => ({
    ...state,
    movie
  }),
  [types.SET_MOVIES]: (state, { movies }) => ({
    ...state,
    movies
  }),
  [types.SEARCH_VALUE]: (state, { searchValue }) => ({
    ...state,
    searchValue
  })
};

export default (state = initialState, action) => (
  map[action.type] && map[action.type](state, action))
  || state;
