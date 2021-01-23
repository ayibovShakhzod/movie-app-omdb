import React, { useContext, useEffect } from 'react';
// import { useSelector } from 'react-redux';
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
import { MovieContext } from '../../context/movie/context';
// import { setMovies } from '../../redux/modules/movies/actions';

export default () => {
  const { searchMovie, movies, searchText } = useContext(MovieContext);
  useEffect(() => {
    searchMovie('Batman');
  }, []);

  return (
    <Container>
      <Navbar />
      <SearchText>{ searchText }</SearchText>
      <CardsCont>
        {movies ? movies.map((item) => (
          <CardItem key={item.imdbID + Date.now()}>
            <Card
              title={item.Title}
              year={item.Year}
              imdbId={item.imdbID}
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
