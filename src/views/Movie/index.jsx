import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Wrapper,
  ImgBox,
  Img,
  RightBox,
  InlineTexts
} from './style';
import { MovieContext } from '../../context/movie/context';
import ImgMovie from '../../assets/img/movieInfo.jpg';

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
        <Img
          src={
            movie.Poster && movie.Poster !== 'N/A' ? movie.Poster : ImgMovie
          }
        />
      </ImgBox>
      <RightBox>
        <h1>{movie.Title}</h1>
        <InlineTexts>
          <p>{movie.Type}</p>
          {movie.Runtime && movie.Runtime !== 'N/A' ? <p>{movie.Runtime}</p> : null}
          {movie.Genre && movie.Genre !== 'N/A' ? <p>{movie.Genre}</p> : null}
          {movie.Country && movie.Country !== 'N/A' ? <p>{movie.Country}</p> : null}
          {movie.Language && movie.Language !== 'N/A' ? <p>{movie.Language}</p> : null}
        </InlineTexts>
        {movie.Plot && movie.Plot !== 'N/A' ? <p>{movie.Plot}</p> : null}
        {movie.Year && movie.Year !== 'N/A' ? (
          <InlineTexts>
            <>Year:</>
            <b>{movie.Year}</b>
          </InlineTexts>
        ) : null}
        {movie.Production && movie.Production !== 'N/A' ? (
          <InlineTexts>
            <>Production:</>
            <b>{movie.Production}</b>
          </InlineTexts>
        ) : null}
        {movie.Director && movie.Director !== 'N/A' ? (
          <InlineTexts>
            <>Director:</>
            <b>{movie.Director}</b>
          </InlineTexts>
        ) : null}
        {movie.Actors && movie.Actors !== 'N/A' ? (
          <InlineTexts>
            <>Actors:</>
            <b>{movie.Actors}</b>
          </InlineTexts>
        ) : null}
        {movie.totalSeasons && movie.totalSeasons !== 'N/A' ? (
          <InlineTexts>
            <>Seasons:</>
            <b>{movie.totalSeasons}</b>
          </InlineTexts>
        ) : null}
      </RightBox>
    </Wrapper>
  );
};
