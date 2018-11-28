import firebase from 'firebase/app';
import 'bootstrap';
import './index.scss';
import apiKeys from '../db/apiKeys.json';
import createNavbar from './components/Navbar/navbar';
import authHelpers from './helpers/authHelpers';
import loginButton from './components/Auth/auth';
import friendsPage from './components/TasksPage/tasks';

// import getAllTasks from '../components/TasksPage/tasks';
const initializeApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  createNavbar();
  authHelpers.checkLoginStatus(friendsPage);
  loginButton();
};

initializeApp();
