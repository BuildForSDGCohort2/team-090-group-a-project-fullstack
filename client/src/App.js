import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Route, Switch, Redirect } from 'react-router-dom';
import Proptypes from 'prop-types';

import Header from './components/header/header.component';
import LandingPage from './pages/landing/landing.component';
import ClassroomPage from './pages/classroom/classroom.component';

import './App.css';
import { selectCurrentUser } from './redux/user/user.selector';

const App = ({ currentUser }) => {

	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={LandingPage} />
				<Route path='/classroom/:id' render={() => !currentUser ? (<Redirect to='/' />) : (<ClassroomPage />)} />
			</Switch>
		</div>
	);
};


App.propTypes = {
	currentUser: Proptypes.object
};

const mapStateToProps = () => createStructuredSelector({
	currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(App);
