import React from 'react';

import { TextFieldContainer, CustomTextFieldContainer } from './custom-textfield.styles'

const CustomTextField = ({ handleChange, ...otherProps }) => (
    <CustomTextFieldContainer>
        <TextFieldContainer onChange={handleChange} {...otherProps} />
    </CustomTextFieldContainer>
);

export default CustomTextField;