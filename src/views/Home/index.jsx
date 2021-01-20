import React, { useEffect, useState } from 'react';
import { Container, CardsCont, CardItem } from './style';
import Navbar from '../../components/Navbar';
import movie from '../../services/movie';
import Card from '../../components/Card';

export default () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    let unmounted = false;
    Promise.all([movie.searchMovies('MineCraft')]).then(
      ([allMovies]) => {
        if (!unmounted) {
          console.log('allMovies', allMovies);
          setMovies(allMovies.Search);
        }
      }
    );
    return () => {
      unmounted = true;
    };
  }, [movie]);
  return (
    <Container>
      <Navbar />
      <CardsCont>
        {movies.map((item) => (
          <CardItem key={item.imdbId}>
            <Card
              title={item.Title}
              year={item.Year}
              imdbId={item.imdbId}
              type={item.Type}
              img={item.Poster}
            />
          </CardItem>
        ))}
      </CardsCont>
    </Container>
  );
};
