import React, { useState } from 'react';
import { connect } from 'react-redux';
import CustomInput from '../custom-input/custom-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { emailSignInStart } from '../../redux/user/user.action';
import Proptypes from 'prop-types';

SignIn.propTypes = {
	emailSignInStart: Proptypes.func
};
 
const SignIn = ({ emailSignInStart }) => {
	const [ credentials, setCredentials ] = useState({ email: '', password: '' });

	const handleSubmit = async event => {
		event.preventDefault();

		try {
			emailSignInStart(credentials);
			setCredentials({ email: '', password: '' });
		} catch(error) {
			console.log('An error occured', error.message);
		}
	};

	const handleChange = event => {
		const { name, value } = event.target;

		setCredentials({ ...credentials, [name]: value  });
	};

	return (
		<div>
			<h1>Sign In</h1>
			<CustomInput handleChange={handleChange} name={'email'} type='email' placeholder={'Email'} required/>
			<CustomInput handleChange={handleChange} name={'password'} placeholder={'Password'} type={'password'}  required/>
			<CustomButton handleSubmit={handleSubmit}>{'Submit'}</CustomButton>
		</div>
	);
};


const mapDispatchToProps = dispatch => ({
	emailSignInStart: credentials => dispatch(emailSignInStart(credentials))
});

export default connect(null, mapDispatchToProps) (SignIn);