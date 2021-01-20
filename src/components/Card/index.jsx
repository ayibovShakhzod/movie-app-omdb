import React from 'react';
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
}) => (
  <Card id={imdbId}>
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
