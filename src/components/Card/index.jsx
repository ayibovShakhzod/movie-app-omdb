import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Card,
  Img,
  Type,
  BottomCard,
  Info,
  Year,
  Title
} from './style';

export default ({
  year,
  title,
  type,
  img,
  imdbId
}) => {
  const { push } = useHistory();

  return (
    <Card onClick={() => push(`/movie/${imdbId}`)}>
      <Img src={img} />
      <Type>{type}</Type>
      <BottomCard>
        <Info>
          <Year>{year}</Year>
        </Info>
        <Title>{title}</Title>
      </BottomCard>
    </Card>
  );
};
