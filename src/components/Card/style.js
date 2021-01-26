import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;
  cursor: pointer;
`;

export const Img = styled.img`
  height: 80vh;
  width: 100%;
  object-fit: cover;
`;

export const Type = styled.div`
  position: absolute;
  top: 14px;
  left: 14px;
  padding: 3px 9px 7px 14px;
  font-size: 16px;
  letter-spacing: 5px;
  display: flex;
  font-family: NOVA, sans-serif;
  background: var(--primary);
`;

export const BottomCard = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: calc(100% - 20px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  background: rgba(3, 3, 3, 0.7);
  backdrop-filter: saturate(180%) blur(20px);
  box-shadow: 0 0 15px rgba(3, 3, 3, 1);
`;

export const Info = styled.div``;

export const Year = styled.div`
  color: var(--primary);
  font-weight: 600;
  text-shadow: 0 0 15px var(--primary);
  font-size: 15px;
`;

export const Title = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
