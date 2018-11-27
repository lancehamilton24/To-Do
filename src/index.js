import firebase from 'firebase/app';
import 'bootstrap';
import './index.scss';
import apiKeys from '../db/apiKeys.json';
import createNavbar from './components/Navbar/navbar';
import loginButton from './components/Auth/auth';
// import getAllTasks from '../components/TasksPage/tasks';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(user.uid);
    }
  });
};

const initializeApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  createNavbar();
  checkLoginStatus();
  loginButton();
};

initializeApp();
