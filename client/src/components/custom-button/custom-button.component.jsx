import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';
 
const CustomButton = ({ children, handleSubmit, ...otherProps }) => (
    <CustomButtonContainer {...otherProps} onClick={handleSubmit}>
        {children }
    </CustomButtonContainer>
);

export default CustomButton;