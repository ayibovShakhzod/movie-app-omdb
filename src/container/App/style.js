import styled from 'styled-components';

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }

  @media (min-width: 768px) {
    width: 718px;
  }

  @media (min-width: 1215px) {
    width: 1170px;
  }
`;

export const Block = styled.div`
  width: 100%;
  background-color: #030303;
  color: #f0eeeb;
  padding-top: 80px;
`;
