import { takeLatest, call, all, put } from 'redux-saga/effects';
import { becomeClassroomMember, startCreateNewClassroom } from '../../firebase/firebase.utils';
import { createClassroomFailure, createClassroomSuccess, creatingClassroom, joinClassroomFailure, joinClassroomSuccess, joiningClassroom } from './classroom.action';

import  ClassroomActionTypes from './classroom.types';


function* createClassroom({ payload }) {
    try {
        yield put(creatingClassroom());
        const newClassroom = yield startCreateNewClassroom(payload);
        yield put(createClassroomSuccess(newClassroom));
    } catch(error) {
        yield put(createClassroomFailure(error));
    }
}

function* joinClassroom({ payload }) {
    try {
        yield put(joiningClassroom());
        const newClassroom = yield becomeClassroomMember(payload);
        yield put(joinClassroomSuccess(newClassroom));
    } catch(error) {
        yield put(joinClassroomFailure(error));
    }

}

function* onCreateClassroomStart() {
    yield takeLatest(
        ClassroomActionTypes.CREATE_CLASSROOM_START,
        createClassroom
    );
}

function* onJoinClassroomStart() {
    yield takeLatest(
        ClassroomActionTypes.JOIN_CLASSROOM_START,
        joinClassroom
    );
}

export function* classroomSagas() {
    yield all([call(onCreateClassroomStart), call(onJoinClassroomStart)]);
}