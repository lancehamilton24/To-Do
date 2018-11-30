import $ from 'jquery';
import authHelpers from '../../helpers/authHelpers';
import taskData from '../../helpers/data/taskData';

const printTasks = (tasksArray) => {
  let domString = '';
  if (tasksArray.length) {
    tasksArray.forEach((task) => {
      domString += `
      <div class="col-md movie-card" task-card-id='${task.id}'>
        <div class="card">
          <div class="card-body">
          <h2 class="card-title">${task.task}</h2>
          </div>
        </div>
      </div>
      `;
    });
    $('#tasks').append(domString);
  } else {
    domString += '<div>You have no tasks.</div>';
  }
};

const tasksPage = () => {
  const uid = authHelpers.getCurrentUid();
  taskData.getAllTasks(uid)
    .then((tasksArray) => {
      printTasks(tasksArray);
    })
    .catch((error) => {
      console.error('error in getting friends', error);
    });
};

const addTask = () => {
  $('.new-task').on('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const value = $('.new-task').val();
      $('#tasks').append(value);
    }
  });
};

const initializeTasksPage = () => {
  tasksPage();
  addTask();
};

export default initializeTasksPage;
