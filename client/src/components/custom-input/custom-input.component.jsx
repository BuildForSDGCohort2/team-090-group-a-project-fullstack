import React from 'react';

import './custom-input.styles.scss';

const CustomInput = ({ handleChange, ...otherProps }) => (
    <div className="group">
        <input className='custom-input' onChange={handleChange}  {...otherProps} />
    </div>
);

export default CustomInput;