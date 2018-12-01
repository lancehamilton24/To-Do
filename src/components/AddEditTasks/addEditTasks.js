import $ from 'jquery';
import authHelpers from '../../helpers/authHelpers';
import taskData from '../../helpers/data/taskData';
import initializeTasksPage from '../TasksPage/tasks';

const newTaskForm = (task) => {
  const form = `
  <div class="form-group">
    <input type="text" class="form-control" value="${task.task}" id="form-new-task" placeholder="New Task">
  </div>
  `;
  return form;
};

const gettingTaskFromForm = () => {
  const task = {
    task: $('#form-new-task').val(),
    uid: authHelpers.getCurrentUid(),
  };
  return task;
};

const buildNewTask = () => {
  const emptyTask = {
    task: '',
  };

  let domString = '<h2>Add New Task</h2>';
  domString += newTaskForm(emptyTask);
  domString += '<button id="add-task">Save New Friend</button>';
  $('#new-task').html(domString).show();
};

const addTask = () => {
  const newTask = gettingTaskFromForm();
  taskData.addTask(newTask)
    . then(() => {
      $('#new-task').html('').show();
      $('#tasks').show();
      initializeTasksPage();
    })
    .catch((error) => {
      console.error('error', error);
    });
};


// console.log(addTask);
$('body').on('click', '#add-task', addTask);

export default buildNewTask;
