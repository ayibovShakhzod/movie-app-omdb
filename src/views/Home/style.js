import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #030303;
  color: #f0eeeb;
  padding: 0 24px 24px;
`;

export const CardsCont = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
`;
// #C02F2E

export const CardItem = styled.div`
  display: flex;
  width: calc(25% - 16px);
  flex: 1 1 calc(25% - 16px);
`;

export const SearchText = styled.h1`
  margin: 14px 0;
  font-family: Monument, sans-serif;
`;
