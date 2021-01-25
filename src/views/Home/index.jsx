import React, { useContext, useEffect } from 'react';
import { CardsCont, CardItem, SearchText } from './style';
import Card from '../../components/Card';
import ImgMovie from '../../assets/img/movieInfo.jpg';
import { MovieContext } from '../../context/movie/context';
import Navbar from '../../components/Navbar';

export default () => {
  const {
    searchMovie,
    movies,
    searchText
    // loading
  } = useContext(MovieContext);
  useEffect(() => {
    searchMovie('Batman');
  }, []);
  // if (loading) {
  //   return <div>loading</div>;
  // }
  return (
    <>
      <Navbar />
      <SearchText>{searchText}</SearchText>
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
        ))
          : null}
      </CardsCont>
    </>
  );
};
