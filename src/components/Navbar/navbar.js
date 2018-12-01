import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';

const navbarEvents = () => {
  $('.nav-link').on('click', (e) => {
    if (e.target.id === 'navbar-button-logout') {
      firebase.auth().signOut().then(() => {
        $('#auth').show();
        $('#tasks').hide();
        console.log('you logged out');
      }).catch((err) => {
        console.error('you still logged in', err);
      });
    } else if (e.target.id === 'navbar-button-tasks') {
      $('#auth').hide();
      $('#tasks').show();
    } else {
      $('#auth').show();
      $('#tasks').hide();
    }
  });
};

const createNavbar = () => {
  const domString = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">To-Do Lists</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li>
        <a id="navbar-button-authentication" class="nav-link" href="#">Authentication</a>
      </li>
      <li>
        <a id="navbar-button-tasks" class="nav-link" href="#">Tasks</a>
      </li>
      <li>
        <a id="navbar-button-logout" class="nav-link" href="#">Logout</a>
      </li>
    </ul>
  </div>`;
  $('#navbar').html(domString);
  navbarEvents();
};


export default createNavbar;
