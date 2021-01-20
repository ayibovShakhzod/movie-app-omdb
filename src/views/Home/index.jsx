import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Container,
  CardsCont,
  CardItem,
  SearchText
} from './style';
import Navbar from '../../components/Navbar';
// import movie from '../../services/movie';
import Card from '../../components/Card';
import ImgMovie from '../../assets/img/movieInfo.jpg';
// import { setMovies } from '../../redux/modules/movies/actions';

export default () => {
  // const dispatch = useDispatch();

  useEffect(() => {
    // let unmounted = false;
    // Promise.all([movie.searchMovies('movie')]).then(
    //   ([allMovies]) => {
    //     if (!unmounted) {
    //       dispatch(setMovies(allMovies.Search));
    //     }
    //   }
    // );
    // return () => {
    //   unmounted = true;
    // };
  }, []);
  const movies = useSelector(
    ({ moviesReducer }) => moviesReducer.movies
  );
  console.log(movies);
  return (
    <Container>
      <Navbar />
      <SearchText>sdas</SearchText>
      <CardsCont>
        {movies ? movies.map((item) => (
          <CardItem key={item.Title + Date.now()}>
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
