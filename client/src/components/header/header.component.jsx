import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Proptypes from 'prop-types';

import { selectCurrentUser } from '../../redux/user/user.selector';
import { signOutStart } from '../../redux/user/user.action';

import { HeaderContainer, LogoContainer, OptionContainer, OptionsContainer } from './header.styles';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = ({ currentUser, signOutStart }) => (
	<HeaderContainer>
		<LogoContainer to='/'>
			<Logo className='logo' />
		</LogoContainer>
		{
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
		}
   
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
