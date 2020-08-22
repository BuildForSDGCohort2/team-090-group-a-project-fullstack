import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const ImageContainer = styled.img`
  height: 40vmin;
  pointer-events: none;
`

export const LinkContainer = styled.a`
  color: #61dafb;
`;