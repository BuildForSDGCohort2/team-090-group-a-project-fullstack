import React from 'react';
import EmptyRecordSVG from '../empty-record-svg/empty-record-svg.component';
import { EmptyRecordContainer } from './empty-record.styles'

const EmptyRecord = ({ message }) => (
    <EmptyRecordContainer>
        <EmptyRecordSVG />
		<h3 className="comment">{message ? message : 'You currently do not belong to any classroom.'}</h3>
    </EmptyRecordContainer>
);

export default React.memo(EmptyRecord);