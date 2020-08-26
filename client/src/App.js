import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import Proptypes from 'prop-types';

import Header from './components/header/header.component';
import RegisterPage from './pages/register/register.component';
import LoginPage  from './pages/login/logiin.component';
import LandingPage from './pages/landing/landing.component';
import HomePage from './pages/home/home.component';

import './App.css';
import { selectCurrentUser } from './redux/user/user.selector';

App.propTypes = {
	currentUser: Proptypes.object
};

const App = ({ currentUser }) => {
	const history = useHistory();
	useEffect(() => {
		if(currentUser) history.push('/home');
	}, [currentUser]);

	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/' render={() => currentUser ? (<Redirect to='/home' />) : (<LandingPage />)} />
				<Route path='/register' component={RegisterPage} />
				<Route path='/login' component={LoginPage} />
				<Route path='/home' render={() => !currentUser ? (<Redirect to='/' />) : (<HomePage />)} />
			</Switch>
		</div>
	);
};

const mapStateToProps = () => createStructuredSelector({
	currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(App);
