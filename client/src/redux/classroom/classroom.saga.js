import { takeLatest, call, all, put } from 'redux-saga/effects';
import { startCreateNewClassroom } from '../../firebase/firebase.utils';
import { createClassroomFailure, createClassroomSuccess } from './classroom.action';

import  ClassroomActionTypes from './classroom.types';


function* createClassroom({ payload }) {
    try {
        const newClassroom = yield startCreateNewClassroom(payload);
        yield put(createClassroomSuccess(newClassroom));
    } catch(error) {
        yield put(createClassroomFailure(error));
    }

}

function* onCreateClassroomStart() {
    yield takeLatest(
        ClassroomActionTypes.CREATE_CLASSROOM_START,
        createClassroom
    );
}
export function* classroomSagas() {
    yield all([call(onCreateClassroomStart)]);
}