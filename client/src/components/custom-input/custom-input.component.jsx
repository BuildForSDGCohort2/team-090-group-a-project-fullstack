import React from 'react';
import Proptypes from 'prop-types';

import './custom-input.styles.scss';

const CustomInput = ({ handleChange, ...otherProps }) => (
	<div className="group">
		<input className='custom-input' onChange={handleChange}  {...otherProps} />
	</div>
);

CustomInput.propTypes = {
	handleChange: Proptypes.func
};

export default CustomInput;