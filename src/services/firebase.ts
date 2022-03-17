import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyBozVXSd4GR86zH_-T_4SIKAAq59jac_yI",
   authDomain: "letmeask-5cbc5.firebaseapp.com",
   databaseURL: "https://letmeask-5cbc5-default-rtdb.firebaseio.com",
   projectId: "letmeask-5cbc5",
   storageBucket: "letmeask-5cbc5.appspot.com",
   messagingSenderId: "274608646388",
   appId: "1:274608646388:web:ad2092cbb79e1321f696a1"
};

firebase.initializeApp(firebaseConfig); 

export const auth = firebase.auth();
export const database = firebase.database();