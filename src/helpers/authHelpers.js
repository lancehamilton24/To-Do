import firebase from 'firebase/app';
import 'firebase/auth';
import $ from 'jquery';

const checkLoginStatus = (initializeTasksPage) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $('#auth').hide();
      $('#navbar-button-authentication').hide();
      $('#navbar-button-tasks').show();
      $('#navbar-button-logout').show();
      initializeTasksPage();
    } else {
      $('#auth').hide();
      $('#navbar-button-authentication').show();
      $('#navbar-button-tasks').hide();
      $('#navbar-button-logout').hide();
    }
  });
};

const getCurrentUid = () => firebase.auth().currentUser.uid;

export default { checkLoginStatus, getCurrentUid };
