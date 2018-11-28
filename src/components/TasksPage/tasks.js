import $ from 'jquery';
import authHelpers from '../../helpers/authHelpers';
import taskData from '../../helpers/data/taskData';

const taskStringBuilder = (tasks) => {
  let taskString = '<h3>Tasks:</h3>';
  tasks.forEach((task) => {
    taskString += `<h5>${task.task}</h5>`;
  });
  return taskString;
};

const printTasks = (tasks) => {
  const domString = `
    <div>
      <div class="task-container">${taskStringBuilder(tasks)}</div>
    </div>
  `;
  $('#tasks').html(domString);
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

const initializeTasksPage = () => {
  tasksPage();
};

export default initializeTasksPage;
