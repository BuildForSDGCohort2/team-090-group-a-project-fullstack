import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectClassrooms } from '../../redux/classroom/classroom.selector';

import Typography from '@material-ui/core/Typography';

import AuthenticationModal from '../../components/authentication-modal/authenticaton-modal.component';
import EmptyRecord from '../../components/empty-record/empty-record.component';
import ClassroomsGrid from '../../components/classrooms-grid/classrooms-grid.component';

import { LandingPageContainer } from './landing.styles';
import { clearActiveClassroom } from '../../redux/classroom/classroom.action';


const LandingPage = ({ currentUser, classrooms, clearActiveClassroom }) => {
	useEffect(() => {
		clearActiveClassroom()
	}, [clearActiveClassroom]);

	return  (
		<LandingPageContainer>
			{
			!currentUser 
			?
			<AuthenticationModal />	
			:
			classrooms.length ?
			(
			<div className="main">
				<Typography variant="h6" gutterBottom>
					{`Hello ${currentUser.displayName}, You belong to these classrooms`}
				</Typography>
				<br />
				<ClassroomsGrid classrooms={classrooms} />
			</div>
			)
			:
			<EmptyRecord className="error" />
			}
			
		</LandingPageContainer>
	);
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	classrooms: selectClassrooms
});

const mapDispatchToProps = dispatch =>({
	clearActiveClassroom: () => dispatch(clearActiveClassroom())
})

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);