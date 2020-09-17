import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import classroomReducer from './classroom/classroom.reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['user', 'classroom'],
};

const rootReducer = combineReducers({
	user: userReducer,
	classroom: classroomReducer
});

export default persistReducer(persistConfig, rootReducer);