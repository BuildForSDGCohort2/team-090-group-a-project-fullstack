import React from 'react';
import PropTypes from 'prop-types';

import { CustomButtonContainer } from './custom-button.styles';
 
const CustomButton = ({ children, handleSubmit, ...otherProps }) => (
	<CustomButtonContainer {...otherProps} onClick={handleSubmit}>
		{children }
	</CustomButtonContainer>
);

CustomButton.propTypes = {
	children: PropTypes.element,
	handleSubmit: PropTypes.func
};

export default CustomButton;