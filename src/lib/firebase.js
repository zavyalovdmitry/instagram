import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyDccLnQTJ2C32-s-LrwPPN-VHelGUtqHc8',
  authDomain: 'instagram-z.firebaseapp.com',
  projectId: 'instagram-z',
  storageBucket: 'instagram-z.appspot.com',
  messagingSenderId: '778901965722',
  appId: '1:778901965722:web:1471769f4c1e5c56864823'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

console.log('firebase', firebase);

// seedDatabase(firebase);

export { firebase, FieldValue };
