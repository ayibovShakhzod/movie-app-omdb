import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../../../assets/icons/searchIcon.svg';

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 3px 7px;
  background-color: #272727;
`;

export const Input = styled.input`
  padding: 0px 6px 0px 13px;
  border: 0;
  border-radius: 0;
  outline: none;
  font-size: 16px;
  background-color: transparent;
  color: var(--white);
`;

export const Button = styled.div`
  background-color: transparent;
  border: 0;
  width: 32px;
  padding: 4px 7px 4px 5px;
  height: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #404040;
`;

export const Icon = styled(SearchIcon)`
  fill: #909090;
  width: 90%;
  height: 90%;
`;
