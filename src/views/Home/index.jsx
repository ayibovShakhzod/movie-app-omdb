import React, { useContext, useEffect } from 'react';
import {
  CardsCont,
  CardItem,
  SearchText
} from './style';
import Card from '../../components/Card';
import ImgMovie from '../../assets/img/movieInfo.jpg';
import { MovieContext } from '../../context/movie/context';

export default () => {
  const { searchMovie, movies, searchText } = useContext(MovieContext);
  useEffect(() => {
    searchMovie('Batman');
  }, []);

  return (
    <>
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
    </>
  );
};
