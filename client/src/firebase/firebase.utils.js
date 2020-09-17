import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyAT0ta79-BrRnDqOLEUjrQqcIX3gs3J2Vw',
	authDomain: 'scool-7b309.firebaseapp.com',
	databaseURL: 'https://scool-7b309.firebaseio.com',
	projectId: 'scool-7b309',
	storageBucket: 'scool-7b309.appspot.com',
	messagingSenderId: '737825224487',
	appId: '1:737825224487:web:982a2145f0dbf006c35b02',
	measurementId: 'G-85RLVFNVXT'
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const { uid: id } = userAuth;

	const userRef = await getUserRef(id);

	const snapShot = await userRef.get();

	if(!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = currentUTCTime;

		try {
			await userRef.set({
				displayName,
				id,
				email,
				classroomsMap: [],
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	} 
    
	return userRef;
};

export const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = auth.onAuthStateChanged(userAuth => {
			unsubscribe();
			resolve(userAuth);
		}, reject);
	});
};


export const startCreateNewClassroom = async ({ currentUser, formData }) => {
	const classroomsRef = await getClassroomsRef()
	const userRef = await getUserRef(currentUser.id)
	const userSnapshot = await userRef.get();
	const newClassroomRef = await classroomsRef.doc();
	
	const classroom = await createNewclassroom(formData, currentUser, newClassroomRef);

	await mapClassroomToUserRef(userRef, userSnapshot, classroom.id)

	return classroom;
}

export const becomeClassroomMember = async ({ classroomId, currentUser }) => {
	const { id: currentUserId } = currentUser;
	const classroomRef = await getClassroomRef(classroomId);
	const userRef = await getUserRef(currentUserId);

	const classroomSnapshot = await classroomRef.get();
	const userSnapshot = await userRef.get();

	if(!classroomSnapshot.exists || !userSnapshot.exists) return null;

	const classroomMembers = await fetchClassroomMembers(classroomId);
	const currentUserIsAMember = classroomMembers.find(member => member.id === currentUserId);

	if (!currentUserIsAMember) {
		const newClassRoomData = await mapUserToClassroomRef(classroomRef, classroomSnapshot, currentUser);
		await mapClassroomToUserRef(userRef, userSnapshot, classroomId);
		return { ...newClassRoomData, classroomMembers: [...classroomMembers, currentUser] };  
	} 
	await updateClassMemberProfile(classroomRef, classroomSnapshot, currentUser);
	return { ...classroomSnapshot.data(), classroomMembers };
};

export const fetchUserClassrooms = async (userId) => {
	let classrooms = [];
	const classroomsRef = await getClassroomsRef();
	const classroomsSnapshot = await classroomsRef.where('classMembersMap', 'array-contains-any', [userId]).get();
	classroomsSnapshot.forEach(doc => classrooms.push(doc.data()));
	return classrooms.filter(classroom => {
		if(classroom.allowUnverifiedClassMembers) return true;
		return classroom.classMembersInfo[userId].isVerified;
	});
}

const createNewclassroom = (formData, currentUser, newClassroomRef) => {
	const classMembersInfo = createClassMemberInfo(currentUser, { isAdmin: true })
	const classroom = { 
		...formData,
		allowUnverifiedClassMembers: true,
		classMembersInfo,
		classMembersMap: [currentUser.id],
		createdBy: currentUser.id,
		id: newClassroomRef.id, 
		createdAt: currentUTCTime
	};

	newClassroomRef.set({
		...classroom,
	});

	return classroom
}

const createClassMemberInfo = (memberProfile, { isAdmin }) => {
	const classMembersInfo = {}
	const classMemberInfo = { 
		joinDate: currentUTCTime,
		isVerified: isAdmin,
		isBlocked: false,
		isInClass: false,
		isOnline: false,
		memberProfile,
		isAdmin 
	}

	classMembersInfo[memberProfile.id] = classMemberInfo;

	return classMembersInfo;
}


const mapUserToClassroomRef = (classroomRef, classroomSnapshot, currentUser) => {
	const classroomData = classroomSnapshot.data();
	const classMembersMap= [...classroomData.classMembersMap, currentUser.id];
	const newclassMemberInfo = createClassMemberInfo(currentUser);
	const classMembersInfo = { ...classroomData.classMembersInfo, ...newclassMemberInfo };

	const newClassRoomData = { 
		...classroomData, 
		classMembersMap,
		classMembersInfo,
		updatedAt: currentUTCTime 
	}

	classroomRef.set({
		...newClassRoomData
	});

	return newClassRoomData;
}

const updateClassMemberProfile = (classroomRef, classroomSnapshot, currentUser) => {
	const classroomData = classroomSnapshot.data();
	if(currentUser.id !== classroomData.createdBy) return;
	const { classMembersInfo } = classroomData;
	classMembersInfo[currentUser.id]['memberProfile'] = currentUser;
	classroomRef.set({
		...classroomData
	});
}

const mapClassroomToUserRef = (userRef, userSnapshot, classroomId) => {
	const userData = userSnapshot.data();
	const classroomsMap = [...userData.classroomsMap, classroomId];

	userRef.set({
		...userData,
		classroomsMap,
		updatedAt: currentUTCTime
	});
}

const fetchClassroomMembers = async (classroomId) => {
	let classMembersWithProfile = [];
	const usersRef = await getUsersRef()
	const userSnapshot = await usersRef.where('classroomsMaps', 'array-contains-any', [classroomId]).get();
	userSnapshot.forEach(doc => classMembersWithProfile.push(doc.data()));
	return classMembersWithProfile;
}

const getClassroomsRef = async () => {
	return await firestore.collection('classrooms');
}

const getUsersRef = async () => {
	return await firestore.collection('users');
}

const getClassroomRef = async classroomId => {
	return await firestore.doc(`classrooms/${classroomId}`);
}

const getUserRef = async userId => {
	return await firestore.doc(`users/${userId}`);
}

const currentUTCTime = new Date(Date.now()).toISOString();


export default firebase;