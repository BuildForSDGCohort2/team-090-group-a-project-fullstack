import React from 'react';

import logo from '../../logo.svg';
import { HeaderContainer, ImageContainer, LinkContainer } from './header.styles'

const Header = () => (
    <HeaderContainer>
        <ImageContainer src={logo}  alt="logo" />
        <p>
          Edit and save to reload.
        </p>
        <LinkContainer
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </LinkContainer>
    </HeaderContainer>
);

export default Header;