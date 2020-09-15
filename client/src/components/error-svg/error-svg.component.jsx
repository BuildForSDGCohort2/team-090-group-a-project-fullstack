import React from 'react';

import { ReactComponent as ErrorImage } from '../../assets/error.svg'
import { ErrorSVGContainer } from './error-svg.styles'

const ErrorSVG = () => (
    <ErrorSVGContainer>
        <ErrorImage />
    </ErrorSVGContainer>
);

export default ErrorSVG;