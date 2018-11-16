import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';

import googleImage from './google.png';
import './auth.scss';

const loginButton = () => {
  const domString = `
    <button id="google-auth" class="btn btn-secondary">
      <img src= "${googleImage}"/>
    </button>
  `;
  $('#to-do').html(domString);
  $('#google-auth').on('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  });
};

const signOutButton = () => {
  const domString = `
  <button id="sign-out-button" class="btn btn-primary">sign-out</button>
  `;
  $('#sign-out').html(domString);
  $('#sign-out-button').on('click', () => {
    firebase.auth().signOut().then(() => {
    });
  });
};

signOutButton();
export default loginButton;
