// Import the functions you need from the SDKs you need
import { deleteApp, getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth, inMemoryPersistence, setPersistence } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const secret = import.meta.env;

const firebaseConfig = {
	apiKey: secret.VITE_FIREBASE_API_KEY,
	authDomain: secret.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: secret.VITE_FIREBASE_PROJECT_ID,
	storageBucket: secret.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: secret.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: secret.VITE_FIREBASE_APP_ID,
	measurementId: secret.VITE_FIREBASE_MEASUREMENT_ID
};

let firebaseApp;
if (!getApps().length) {
	firebaseApp = initializeApp(firebaseConfig);
} else {
	firebaseApp = getApp();
	deleteApp(firebaseApp);
	firebaseApp = initializeApp(firebaseConfig);
}

export const auth = getAuth(firebaseApp);
