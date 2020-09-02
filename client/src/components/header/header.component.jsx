import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Proptypes from 'prop-types';
import {Link} from 'react-router-dom';

import { selectCurrentUser } from '../../redux/user/user.selector';
import { signOutStart } from '../../redux/user/user.action';

import { HeaderContainer, FlexContainer, MenuContainer, LogoContainer, OptionContainer, OptionsContainer } from './header.styles';
import { ReactComponent as Menu } from '../../assets/Hamburger.svg';

const Header = ({ currentUser, signOutStart }) => (
	<HeaderContainer>
		<FlexContainer>
			<MenuContainer>
				<Menu className = "menu" />
			</MenuContainer>
			<LogoContainer>
				<Link exact to='/'>
					<h2>
						<span style={{color: "red"}}>s</span>
						<span style={{color: "red"}}>c</span>
						<span style={{color: "blue"}}>o</span>
						<span style={{color: "blue"}}>o</span>
						<span style={{color: "red"}}>l</span>
					</h2>
				</Link>
			</LogoContainer>
		</FlexContainer>
		
		{/*
			!currentUser  ?
				(<OptionsContainer>
					<OptionContainer to='/'>Home</OptionContainer>
					<OptionContainer to='/login'>Sign In</OptionContainer>
					<OptionContainer to='/register'>Sign Up</OptionContainer>
				</OptionsContainer>
				) : 
				(
					<OptionsContainer>
						<OptionContainer onClick={() => signOutStart()} as={'div'} >Sign Out</OptionContainer>
					</OptionsContainer>
				)
				*/}
		<OptionsContainer>
			{/*<OptionContainer>
				<svg focusable="false" width="24" height="24" viewBox="0 0 24 24" class=" NMm5M"><path d="M20 13h-7v7h-2v-7H4v-2h7V4h2v7h7v2z"></path></svg>
			</OptionContainer>*/}
			<OptionContainer>
				<svg className ="gb_cf" width="24" height="24" viewBox="0 0 24 24"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path></svg>
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
