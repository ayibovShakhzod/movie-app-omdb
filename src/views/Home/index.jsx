import React, { useEffect, useState } from 'react';
import {
  Container,
  CardsCont,
  CardItem,
  SearchText
} from './style';
import Navbar from '../../components/Navbar';
import movie from '../../services/movie';
import Card from '../../components/Card';
import ImgMovie from '../../assets/img/movieInfo.jpg';

export default () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    let unmounted = false;
    Promise.all([movie.searchMovies('MineCraft')]).then(
      ([allMovies]) => {
        if (!unmounted) {
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
      <SearchText>Minecraft</SearchText>
      <CardsCont>
        {movies.map((item) => (
          <CardItem key={item.Title + item.imdbId}>
            <Card
              title={item.Title}
              year={item.Year}
              imdbId={item.imdbId}
              type={item.Type}
              img={item.Poster !== 'N/A' ? item.Poster : ImgMovie}
            />
          </CardItem>
        ))}
      </CardsCont>
    </Container>
  );
};
