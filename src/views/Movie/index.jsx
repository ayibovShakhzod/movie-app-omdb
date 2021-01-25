import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Wrapper,
  ImgBox,
  Img,
  RightBox,
  InlineTexts,
  IMDB
} from './style';
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
  return (
    <Wrapper>
      <ImgBox>
        <Img src={movie.Poster} />
      </ImgBox>
      <RightBox>
        <h1>{movie.Title}</h1>
        <InlineTexts>
          <p>{movie.Runtime}</p>
          <p>{movie.Genre}</p>
        </InlineTexts>
        <p>{movie.Plot}</p>
        <InlineTexts>
          <IMDB>IMDB</IMDB>
          {/* <strong>{movie.Ratings}</strong> */}
        </InlineTexts>
      </RightBox>
    </Wrapper>
  );
};
