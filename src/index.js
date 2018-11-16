import $ from 'jquery';
import 'bootstrap';
import './index.scss';

import apiKeys from '../db/apiKeys.json';

import loginButton from '../components/Auth/auth';

$('#to-do').html('hello world');

const initializeApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
};

initializeApp();
