import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Proptypes from 'prop-types';
import {Link} from 'react-router-dom';

import { selectCurrentUser } from '../../redux/user/user.selector';
import { signOutStart } from '../../redux/user/user.action';

import { HeaderContainer, FlexContainer, LogoContainer, OptionContainer, OptionsContainer } from './header.styles';
import { ReactComponent as UserMenu } from '../../assets/image.svg';
import Logo from '../logo/logo.component';

const Header = ({ currentUser, signOutStart }) => (
	<HeaderContainer>
		<FlexContainer>
			<LogoContainer>
				<Link to='/'>
					<Logo />
				</Link>
			</LogoContainer>
		</FlexContainer>
		
		<OptionsContainer>
			<OptionContainer as="div">
				<svg className ="gb_cf" width="24" height="24" viewBox="0 0 24 24" fill="#5E5E5E"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path></svg>
			</OptionContainer>
			<OptionContainer as="div">
				<UserMenu onClick={signOutStart} />
			</OptionContainer>
		</OptionsContainer>
   
	</HeaderContainer>
);


Header.propTypes = {
	currentUser: Proptypes.object,
	signOutStart: Proptypes.func
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
	signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
