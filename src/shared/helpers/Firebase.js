// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';
import {
  API_KEY,
  APP_ID,
  AUTH_DOMAIN,
  MEAUREMENT_ID,
  MESSAGING_SENDING_ID,
  PROJECT_ID,
  STORAGE_BUCKET,
} from '../config/environments';

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDING_ID,
  appId: APP_ID,
  measurementId: MEAUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const firestoreDb = getFirestore(app);
const realtimeDb = getDatabase(app);

export { firestoreDb, realtimeDb };
