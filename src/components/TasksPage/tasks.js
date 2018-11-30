import $ from 'jquery';
import authHelpers from '../../helpers/authHelpers';
import taskData from '../../helpers/data/taskData';

const printTasks = (tasksArray) => {
  let domString = '';
  if (tasksArray.length) {
    tasksArray.forEach((task) => {
      domString += `
      <div class="col-md movie-card" task-card-id="${task.id}">
        <div class="card">
          <div class="card-body">
          <h2 class="card-title get-single" id="${task.id}">${task.task}</h2>
          </div>
        </div>
      </div>
      `;
      $('#tasks').append(domString);
    });
  } else {
    domString += '<div>You have no tasks.</div>';
  }
};

const printSingleTask = (task) => {
  const taskString = `
  <div class="col-md movie-card" task-card-id='${task.id}'>
  <div class="card">
    <div class="card-body">
    <h2 class="card-title">${task.task}</h2>
    </div>
      <div class="form-check form-check-inline">
      <label class="form-check-label" for="inlineCheckbox1">Completed</label>
      <input class="form-check-input is-completed-checkbox" type="checkbox" id="${task.id}">
      </div>
  </div>
</div>
`;
  $('#tasks').append(taskString);
  if (task.isCompleted) {
    $('.is-completed-checkbox').attr('checked', true);
  }
};

const getSingleTask = (e) => {
  // firebase id
  const taskId = e.target.id;
  taskData.getSingleTask(taskId).then((task) => {
    console.log('hello');
    printSingleTask(task);
  })
    .catch((error) => {
      console.error('error in getting one friend', error);
    });
};

const updateIsCompleted = (e) => {
  const taskId = e.target.id;
  const isCompleted = e.target.checked;
  taskData.updatedIsCompleted(taskId, isCompleted)
    .then(() => {

    })
    .catch((err) => {
      console.err('error in updating flag', err);
    });
  console.log('you clicked checkbox');
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

const bindEvents = () => {
  $('body').on('change', '.is-completed-checkbox', updateIsCompleted);
  $('body').on('click', '.get-single', getSingleTask);
};


const initializeTasksPage = () => {
  tasksPage();
  bindEvents();
  addTask();
};

export default initializeTasksPage;
