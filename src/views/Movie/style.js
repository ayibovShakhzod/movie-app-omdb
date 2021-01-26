import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  min-height: calc(100vh - 80px);
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (min-width: 768px) {
    flex-wrap: wrap;
  }

  @media (min-width: 1215px) {
  }
`;

export const ImgBox = styled.div`
  @media (max-width: 768px) {
    flex: 0 0 320px;
    max-width: 320px;
    width: 100%;
  }

  @media (min-width: 768px) {
    max-width: 35%;
    flex: 0 0 35%;
    padding: 15px;
  }

  @media (min-width: 1215px) {
    max-width: 30%;
    flex: 0 0 30%;
    padding: 20px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 15px;
`;

export const RightBox = styled.div`
  max-width: 70%;
  flex: 0 0 70%;
  padding: 20px;
  display: flex;
  row-gap: 20px;
  flex-direction: column;
  @media (max-width: 768px) {
    max-width: 100%;
    flex: 0 0 100%;
    padding: 20px;
  }

  @media (min-width: 768px) {
    max-width: 65%;
    flex: 0 0 65%;
    padding: 15px;
  }

  @media (min-width: 1215px) {
    max-width: 70%;
    flex: 0 0 70%;
    padding: 20px;
  }
`;

export const InlineTexts = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  align-items: center;
  p {
    font-size: 14px;
    border-radius: 25px;
    background-color: var(--primary);
    padding: 5px 15px;
  }
`;

export const IMDB = styled.h3`
  border-radius: 25px;
  background-color: var(--white);
  padding: 5px 15px;
  color: var(--black);
  font-weight: 900;
  display: inline-block;
`;
