import axios from 'axios';
import apiKeys from '../../../db/apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;
// const getCurrentUid = () => firebase.auth().currentUser.uid;

const tasksArray = [];

const getAllTasks = uid => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/tasks.json?orderBy="uid"&equalTo="${uid}"`)
    .then((results) => {
      const tasksObject = results.data;
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

const updatedIsCompleted = (taskId, isCompleted) => axios.patch(`${firebaseUrl}/tasks/${taskId}.json`, { isCompleted });

export default {
  getAllTasks,
  updatedIsCompleted,
};
