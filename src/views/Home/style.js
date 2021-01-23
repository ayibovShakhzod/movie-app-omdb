import styled from 'styled-components';

export const CardsCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 30px;
  margin: 0 -15px;
  @media (max-width: 768px) {
    row-gap: 14px;
    margin: 0 -7px;
  }

  @media (min-width: 768px) {
    row-gap: 20px;
    margin: 0 -10px;
  }

  @media (min-width: 1215px) {
    row-gap: 30px;
    margin: 0 -15px;
  }
`;

export const CardItem = styled.div`
  display: flex;
  max-width: 100%;
  flex: 0 0 100%;
  padding: 0 15px;
  @media (max-width: 768px) {
    max-width: 50%;
    flex: 0 0 50%;
    padding: 0 7px;
  }
  
  @media (max-width: 450px) {
    max-width: 100%;
    flex: 0 0 100%;
    padding: 0 7px;
  }
  @media (min-width: 768px) {
    max-width: 33.333333%;
    flex: 0 0 33.333333%;
    padding: 0 10px;
  }

  @media (min-width: 1215px) {
    max-width: 33.333333%;
    flex: 0 0 33.333333%;
    padding: 0 15px;
  }
`;

export const SearchText = styled.h1`
  margin: 14px 0;
  font-family: Monument, sans-serif;
`;
