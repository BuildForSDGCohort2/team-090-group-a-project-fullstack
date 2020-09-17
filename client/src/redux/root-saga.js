import { all, call } from 'redux-saga/effects';

import { userSagas } from './user/user.saga';
import { classroomSagas } from './classroom/classroom.saga'

export default function* rootSaga() {
	yield all([call(userSagas), call(classroomSagas)]);
}