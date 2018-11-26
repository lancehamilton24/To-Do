import axios from 'axios';
// import firebase from 'firebase/app';
import apiKeys from '../../db/apiKeys.json';

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

// const tasksPage = () => {
//   const uid = getCurrentUid;
//   Data.getAllTasks(uid)
//     .then((friendsArray) => {
//       buildDropdown(friendsArray);
//     })
//     .catch((error) => {
//       console.error('error in getting friends', error);
//     });
// };

getAllTasks();
