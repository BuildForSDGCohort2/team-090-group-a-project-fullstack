import React from 'react';
import PropTypes from 'prop-types';

import { CustomButtonContainer } from './custom-button.styles';


CustomButton.propTypes = {
	children: PropTypes.element,
	handleSubmit: PropTypes.func
};
 
const CustomButton = ({ children, handleSubmit, ...otherProps }) => (
	<CustomButtonContainer {...otherProps} onClick={handleSubmit}>
		{children }
	</CustomButtonContainer>
);

export default CustomButton;