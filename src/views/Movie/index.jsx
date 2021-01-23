import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MovieContext } from '../../context/movie/context';

export default () => {
  const { id } = useParams();
  const { getMovie, movie, loading } = useContext(
    MovieContext
  );
  useEffect(() => {
    getMovie(id);
  }, []);
  if (loading) {
    return <div>loading</div>;
  }
  return <div>{movie.Title}</div>;
};
