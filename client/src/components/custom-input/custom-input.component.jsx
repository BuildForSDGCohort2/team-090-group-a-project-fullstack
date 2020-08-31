import React from 'react';
import Proptypes from 'prop-types';

import './custom-input.styles.scss';

CustomInput.propTypes = {
	handleChange: Proptypes.func
};

const CustomInput = ({ handleChange, ...otherProps }) => (
	<div className="group">
		<input className='custom-input' onChange={handleChange}  {...otherProps} />
	</div>
);

export default CustomInput;