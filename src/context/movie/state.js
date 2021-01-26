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
    searchText: 'Batman'
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
        const movies = !response.Search
          ? []
          : response.Search;
        dispatch({
          type: types.SEARCH_MOVIE,
          payload: movies,
          searchText: value
        });
      }
    );
  };
  const getMovie = (value) => {
    setLoading();
    Promise.all([request.getMovie(value)]).then(
      ([response]) => {
        const movie = !response.Title ? {} : response;
        console.log(movie);
        dispatch({
          type: types.GET_MOVIE,
          payload: movie
        });
      }
    );
  };
  const {
    movies, movie, loading, searchText
  } = state;
  return (
    <MovieContext.Provider
      value={{
        searchMovie,
        setLoading,
        getMovie,
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
