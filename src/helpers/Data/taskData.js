import axios from 'axios';
import apiKeys from '../../../db/apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;
// const getCurrentUid = () => firebase.auth().currentUser.uid;


const getAllTasks = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/tasks.json`)
    .then((results) => {
      const tasksObject = results.data;
      const tasksArray = [];
      if (tasksObject !== null) {
        Object.keys(tasksObject).forEach((taskId) => {
          tasksObject[taskId].id = taskId;
          tasksArray.push(tasksObject[taskId]);
        });
      }
      resolve(tasksArray);
      console.log(tasksArray);
    })
    .catch((error) => {
      reject(error);
    });
});

export default { getAllTasks };
