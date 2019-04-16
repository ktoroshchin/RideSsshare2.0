import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyB7zF3ewwVjNtUgS9exD54lltmkVFj1I8A',
    authDomain: 'sociallogin-33a1d.firebaseapp.com',
    databaseURL: "https://sociallogin-33a1d.firebaseio.com",
    projectId: "sociallogin-33a1d",
    storageBucket: "sociallogin-33a1d.appspot.com",
    messagingSenderId: "856890816417"
}
firebase.initializeApp(config)
firebase.firestore()

export default firebase;