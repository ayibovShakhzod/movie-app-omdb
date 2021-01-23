import styled from 'styled-components';

export const Navbar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 14px 0;
  border-bottom: 1px solid #272727;
  position: fixed;
  z-index: 999;
  background-color: #030303;
  top:0;
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    row-gap: 10px;
    padding: 7px 0;
  }

`;

export const Logo = styled.h1`
  letter-spacing: 5px;
  font-family: NOVA, sans-serif;
  color: var(--primary);

`;
