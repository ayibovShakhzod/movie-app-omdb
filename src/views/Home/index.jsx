import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
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
// import { setMovies } from '../../redux/modules/movies/actions';

export default () => {
  // const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);
  const searchValue = useSelector(
    ({ moviesReducer }) => moviesReducer.searchValue
  );
  useEffect(() => {
    let unmounted = false;
    Promise.all([movie.searchMovies(searchValue)]).then(
      ([allMovies]) => {
        if (!unmounted) {
          setMovies(allMovies.Search);
        }
      }
    );
    return () => {
      unmounted = true;
    };
  }, [setMovies]);

  return (
    <Container>
      <Navbar />
      <SearchText>sdas</SearchText>
      <CardsCont>
        {movies ? movies.map((item) => (
          <CardItem key={Date.now()}>
            <Card
              title={item.Title}
              year={item.Year}
              imdbId={item.imdbId}
              type={item.Type}
              img={
                item.Poster !== 'N/A'
                  ? item.Poster
                  : ImgMovie
              }
            />
          </CardItem>
        )) : null}
      </CardsCont>
    </Container>
  );
};
