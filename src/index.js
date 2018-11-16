import firebase from 'firebase/app';
import $ from 'jquery';
import 'bootstrap';
import './index.scss';

import apiKeys from '../db/apiKeys.json';

import loginButton from '../components/Auth/auth';

$('#to-do').html('hello world');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(user.uid);
    }
  });
};

const initializeApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  loginButton();
  checkLoginStatus();
};

initializeApp();
