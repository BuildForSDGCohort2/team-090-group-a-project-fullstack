import ClassroomActionTypes from './classroom.types';
import ClassroomTypes from './classroom.types'

export const createClassroomStart = (payload) => ({
    type: ClassroomTypes.CREATE_CLASSROOM_START,
    payload
});

export const createClassroomSuccess = (payload) => ({
    type: ClassroomTypes.CREATE_CLASSROOM_SUCCESS,
    payload
});

export const createClassroomFailure = (payload) => ({
    type: ClassroomTypes.CREATE_CLASSROOM_FAILURE,
    payload
});

export const creatingClassroom = () => ({
    type: ClassroomTypes.CREATING_CLASSROOM,
});


export const joinClassroomStart = (payload) => ({
    type: ClassroomTypes.JOIN_CLASSROOM_START,
    payload
});

export const joinClassroomSuccess = (payload) => ({
    type: ClassroomTypes.JOIN_CLASSROOM_SUCCESS,
    payload
});

export const joinClassroomFailure = (payload) => ({
    type: ClassroomTypes.JOIN_CLASSROOM_FAILURE,
    payload
});

export const joiningClassroom = () => ({
    type: ClassroomTypes.JOINING_CLASSROOM
});

export const storeUserClassrooms = payload => ({
    type: ClassroomActionTypes.STORE_USER_CLASSROOMS,
    payload
});