import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  min-height: calc(100vh - 80px);
`;

export const ImgBox = styled.div`
  max-width: 30%;
  flex: 0 0 30%;
  padding: 20px;
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
`;

export const InlineTexts = styled.div`
  display: flex;
  column-gap: 20px;
  font-size: 14px;
  p {
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
