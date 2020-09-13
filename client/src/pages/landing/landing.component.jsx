import React from 'react';

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


export default LandingPage;