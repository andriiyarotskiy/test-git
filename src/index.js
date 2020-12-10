import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase';



const firebaseConfig = {
    apiKey: "AIzaSyBE-jGrV8VuW-7dzTIvFWpG640F4ZIQcpk",
    authDomain: "training-react-test-auth.firebaseapp.com",
    databaseURL: "https://training-react-test-auth-default-rtdb.firebaseio.com",
    projectId: "training-react-test-auth",
    storageBucket: "training-react-test-auth.appspot.com",
    messagingSenderId: "924794861461",
    appId: "1:924794861461:web:a8538064328e200ccfe89c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
