const {useState} = require('react');
import database from '@react-native-firebase/database';

const ReadData = () => {
  const todos = database().ref('/Todos');
  const onLoading = todos.on('value', snapshot => {
    snapshot.forEach(function (childSnapshot) {
      const value = childSnapshot.val();
      const key = {keys: childSnapshot.key};
      const data = {...key, value};
      todos = [...todos, data];
    });
  });
};

export {ReadData};
