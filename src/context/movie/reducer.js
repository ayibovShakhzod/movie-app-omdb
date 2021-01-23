import types from '../../constants/action-types';

const handlers = {
  [types.SEARCH_MOVIE]: (state, { payload, text }) => ({
    ...state,
    movies: payload,
    loading: false,
    searchText: text
  }),
  [types.GET_MOVIE]: (state, { payload }) => ({
    ...state,
    movie: payload,
    loading: false
  }),
  [types.SET_LOADING]: (state) => ({
    ...state,
    loading: true
  }),
  DEFAULT: (state) => state
};

export const movieReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
