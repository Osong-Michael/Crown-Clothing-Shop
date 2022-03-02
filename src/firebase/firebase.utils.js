import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDKAGUdwUkqDg9K8xK4hgU7ZdXQADnW7cY",
    authDomain: "crown-db-271cd.firebaseapp.com",
    projectId: "crown-db-271cd",
    storageBucket: "crown-db-271cd.appspot.com",
    messagingSenderId: "992535355314",
    appId: "1:992535355314:web:a2f66b9e81943d69a64eab",
    measurementId: "G-55KW3FD24G"
};


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
