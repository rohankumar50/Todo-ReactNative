import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Constants from '../components/Constants';
import ProgressBar from '../components/ProgressBar';
import CurrentDate from '../components/CurrentDate';
import {useDispatch, useSelector} from 'react-redux';
import {AddTodo, RemoveTodo} from '../redux/actions/todoActions/TodoActions';
import TodoItem from '../components/TodoItem';
import NullData from '../components/NullData';
import database from '@react-native-firebase/database';
import {Divider} from 'react-native-paper';

const UpcomingItem = ({navigation}) => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const todos = database()
      .ref('/Todos')
      .orderByChild('isReminder')
      .equalTo(true);
    const onLoading = todos.on('value', snapshot => {
      setTodos([]);
      setCount(snapshot.numChildren());
      snapshot.forEach(function (childSnapshot) {
        const value = childSnapshot.val();
        const key = {keys: childSnapshot.key};
        const data = {...key, value};
        setTodos(todos => [...todos, data]);
      });
    });

    return () => {
      todos.off('value', onLoading);
    };
  }, []);
  return (
    <View style={{height: 100}}>
      {count === 0 ? (
        <View style={{alignItems: 'center'}}>
          <Image
            style={styles.upcomingEventImage}
            source={require('../assets/upcoming.png')}></Image>
          <Text style={{color: '#111', marginTop: 10}}>No upcoming events</Text>
        </View>
      ) : (
        <FlatList
          data={todos}
          renderItem={({item}) => (
            <View>
              <TodoItem
                items={item}
                title={item.value.title}
                key={item.key}
                date={item.value.createdDate}
                time={item.value.createdTime}
                reminder={item.value.reminder}
                color={'#BA68C8'}
                navigation={navigation}
              />
              <Divider style={{backgroundColor: '#E0E0E0'}} />
            </View>
          )}
        />
      )}
    </View>
  );
};

export default UpcomingItem;

const styles = StyleSheet.create({
  todo: {
    color: '#757575',
    fontWeight: '300',
    fontSize: 16,
  },
  deleteIcon: {
    width: 20,
    height: 20,
  },
  upcomingEventImage: {
    width: 70,
    height: 70,
    opacity: 0.5,
  },
});
