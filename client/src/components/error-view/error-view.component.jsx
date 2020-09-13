import React from 'react';
import ErrorSVG from '../error-svg/error-svg.component';
import { ErrorViewContainer } from './error-view.styled'

const ErrorView = ({ message }) => (
    <ErrorViewContainer>
        <ErrorSVG />
		<h3 className="comment">{message ? message : 'You currently do not have any existing class.'}</h3>
    </ErrorViewContainer>
);

export default ErrorView;