import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB7MyCLXbvIJCL7s7eRFezg8Y8ssrmyFRs",
    authDomain: "project-8bf9e.firebaseapp.com",
    databaseURL: "https://project-8bf9e.firebaseio.com",
    projectId: "project-8bf9e",
    storageBucket: "project-8bf9e.appspot.com",
    messagingSenderId: "483265702553",
    appId: "1:483265702553:web:b4648c970f1deb576f6608"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();

export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();


