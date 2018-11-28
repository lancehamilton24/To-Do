import $ from 'jquery';
import authHelpers from '../../helpers/authHelpers';
import taskData from '../../helpers/data/taskData';

const buildDropdown = (tasksArray) => {
  let dropdown = `<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Pick a Friend
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">`;
  if (tasksArray.length) {
    tasksArray.forEach((task) => {
      dropdown += `<div class="dropdown-item get-single" data-dropdown-id=${task.id}>${task.task}</div>`;
    });
  } else {
    dropdown += '<div class="dropdown-item">You have no friends.</div>';
  }

  dropdown += '</div></div>';
  $('#tasks').html(dropdown);
};

const tasksPage = () => {
  const uid = authHelpers.getCurrentUid();
  taskData.getAllTasks(uid)
    .then((tasksArray) => {
      buildDropdown(tasksArray);
    })
    .catch((error) => {
      console.error('error in getting friends', error);
    });
};

const initializeTasksPage = () => {
  tasksPage();
};

export default initializeTasksPage;
