import ClassroomActionTypes from './classroom.types';
import ClassroomTypes from './classroom.types';
import { mapClassroomToClassrooms } from './classroom.utils';

const InitialReducer = {
    classrooms: [],
    activeClassroom: null,
    creatingClassroom: false,
    joiningClassroom: false,
    error: null
};


const classroomReducer = (state = InitialReducer, action) => {
    switch(action.type) {
        case ClassroomTypes.CREATING_CLASSROOM:
            return {
                ...state,
                creatingClassroom: true
            }; 
        case ClassroomTypes.JOINING_CLASSROOM:
            return {
                ...state,
                joiningClassroom: true
            };
        case ClassroomTypes.CREATE_CLASSROOM_SUCCESS:
            return {
                ...state,
                classrooms: [ ...state.classrooms, action.payload],
                creatingClassroom: false,
            }; 
        case ClassroomTypes.CREATE_CLASSROOM_FAILURE:
            return {
                ...state,
                creatingClassroom: false,
                error: action.payload
            };
        case ClassroomTypes.JOIN_CLASSROOM_SUCCESS:
            return {
                ...state,
                classrooms: mapClassroomToClassrooms(state.classrooms, action.payload),
                activeClassroom: action.payload,
                joiningClassroom: false,
            }; 
        case ClassroomTypes.JOIN_CLASSROOM_FAILURE:
            return {
                ...state,
                joiningClassroom: false,
                error: action.payload
            };
        case ClassroomActionTypes.STORE_USER_CLASSROOMS:
            return {
                ...state,
                classrooms: [...action.payload]
            }
        case ClassroomActionTypes.CLEAR_ACTIVE_CLASSROOM:
            return {
                ...state,
                activeClassroom: null
            }
        default:
            return state;
    }
}

export default classroomReducer;