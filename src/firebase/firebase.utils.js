import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDiTFsCnv3NEPUXvRxnqjd8Df98bWfnYdM',
  authDomain: 'dc808-db.firebaseapp.com',
  databaseURL: 'https://dc808-db.firebaseio.com',
  projectId: 'dc808-db',
  storageBucket: '',
  messagingSenderId: '620000431596',
  appId: '1:620000431596:web:213ab3a1addc738a'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
