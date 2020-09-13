import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { selectCurrentUser } from '../../redux/user/user.selector';

import Backdrop from '../../components/backdrop/backdrop.components';
import ErrorView from '../../components/error-view/error-view.component';
import { LandingPageContainer } from './landing.styles';

const LandingPage = ({ currentUser }) => (
	<LandingPageContainer>
		{
		currentUser 
		?	
		<ErrorView className="error" />
		: 
		<Backdrop />
		}
		
	</LandingPageContainer>
);

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(LandingPage);