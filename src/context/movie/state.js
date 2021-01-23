import React, { useReducer } from 'react';
import { MovieContext } from './context';
import { movieReducer } from './reducer';
import types from '../../constants/action-types';
import request from '../../services/movie';

export default ({ children }) => {
  const initialState = {
    movies: [],
    movie: {},
    loading: false,
    searchText: ''
  };
  const [state, dispatch] = useReducer(
    movieReducer,
    initialState
  );
  const setLoading = () => dispatch({ type: types.SET_LOADING });
  const searchMovie = (value) => {
    setLoading();
    Promise.all([request.searchMovies(value)]).then(
      ([response]) => {
        const movie = !response.Search
          ? []
          : response.Search;
        dispatch({
          type: types.SEARCH_MOVIE,
          payload: movie,
          text: value
        });
      }
    );
  };

  const {
    movies,
    movie,
    loading,
    searchText
  } = state;
  return (
    <MovieContext.Provider
      value={{
        searchMovie,
        setLoading,
        movies,
        movie,
        loading,
        searchText
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
