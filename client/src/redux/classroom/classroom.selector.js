import { createSelector } from 'reselect';

const selectClassroomState = state => state.classroom;

export const selectClassrooms = createSelector(
	[selectClassroomState],
	classroomState => classroomState.classrooms
);

export const selectIsCreatingClassroom = createSelector(
	[selectClassroomState],
	classroomState => classroomState.creatingClassroom
);

export const selectIsJoiningClassroom = createSelector(
	[selectClassroomState],
	classroomState => classroomState.joiningClassroom
);

export const selectActiveClassroom = createSelector(
	[selectClassroomState],
	classroomState => classroomState.activeClassroom
);

export const selectClassroomError = createSelector(
	[selectClassroomState],
	classroomState => classroomState.error
);