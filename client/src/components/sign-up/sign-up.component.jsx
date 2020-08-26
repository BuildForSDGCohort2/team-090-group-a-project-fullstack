import React, { useState } from 'react';
import { connect } from 'react-redux';
import CustomInput from '../custom-input/custom-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signUpStart } from '../../redux/user/user.action';
import Proptypes from 'prop-types';

SignUp.propTypes = {
	signUpStart: Proptypes.func
};
 
const SignUp = ({ signUpStart }) => {

	const [ credentials, setCredentials ] = useState({ name: '', email: '', password: '', confirm: '' });

	const handleSubmit = async event => {
		event.preventDefault();
		console.log(credentials);

		const { password, confirm } = credentials;

		if(password !== confirm) {
			alert('Passwords don\'t match');
			return;
		}

		try {
			signUpStart(credentials);
			setCredentials({ displayName: '', email: '', password: '', confirmPassword: '' });
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
			<h1>Sign Up</h1>
			<CustomInput handleChange={handleChange} name={'name'} placeholder={'Name'} type={'text'} required/>
			<CustomInput handleChange={handleChange} name={'email'} type='email' placeholder={'Email'} required/>
			<CustomInput handleChange={handleChange} name={'password'} placeholder={'Password'} type={'password'}  required/>
			<CustomInput handleChange={handleChange} name={'confirm'} placeholder={'Confirm Password'} type={'password'}  required/>
			<CustomButton handleSubmit={handleSubmit}>{'Submit'}</CustomButton>
		</div>
	);
};


const mapDispatchToProps = dispatch => ({
	signUpStart: credentials => dispatch(signUpStart(credentials))
});

export default connect(null, mapDispatchToProps) (SignUp);