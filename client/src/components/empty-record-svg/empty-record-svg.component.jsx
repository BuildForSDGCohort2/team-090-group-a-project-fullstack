import React from 'react';

import { ReactComponent as ErrorImage } from '../../assets/error.svg'
import { EmptyRecordSVGContainer } from './empty-record-svg.styles'

const EmptyRecordSVG = () => (
    <EmptyRecordSVGContainer>
        <ErrorImage />
    </EmptyRecordSVGContainer>
);

export default EmptyRecordSVG;