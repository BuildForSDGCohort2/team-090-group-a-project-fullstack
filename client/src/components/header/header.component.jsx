import React from 'react';

import {ReactComponent as Logo} from '../../assets/crown.svg';

import { HeaderContainer, LogoContainer, OptionContainer, OptionsContainer } from './header.styles';

const Header = () => (
  <HeaderContainer>
    <LogoContainer to='/'>
        <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
        <OptionContainer to='/'>Home</OptionContainer>
        <OptionContainer to='/register'>Sign Up</OptionContainer>
    </OptionsContainer>
  </HeaderContainer>
);

export default Header;