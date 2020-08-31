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

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if(!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	} 
    
	return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
	const collectionRef = firestore.collection(collectionKey);
    
	const batch = firestore.batch();

	objectsToAdd.forEach(obj => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	});

	return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
	const transformedCollection = collections.docs.map(doc => {
		const { title, items } = doc.data();

		return {
			id: doc.id,
			routeName: encodeURI(title.toLowerCase()),
			title,
			items,

		};
	});

	return transformedCollection.reduce((accummulator, collection) => {
		accummulator[collection.title.toLowerCase()] = collection;
		return accummulator;
	}, {});
};

export const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = auth.onAuthStateChanged(userAuth => {
			unsubscribe();
			resolve(userAuth);
		}, reject);
	});
};


export default firebase;