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
import { Divider } from 'react-native-paper';

const CompletedTasks = () => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const todos = database().ref('/Todos');

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
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.headerText}>Completed Todos</Text>
            <CurrentDate />
          </View>
          <View style={styles.progress}>
            <Text style={styles.progressText}>10 Todos</Text>
            <ProgressBar />
          </View>
        </View>
        <View style={styles.headerContentImage}>
          <Image source={require('../assets/human4.png')} style={styles.icon} />
        </View>
      </View>
      <View style={styles.content}>
        {todos.filter(todo => {
          return todo.value.completed;
        }).length === 0 ? (
          <NullData />
        ) : (
          <FlatList
            data={todos}
            renderItem={({item}) =>
              item.value.completed === true ? (
                <View>
                  <TodoItem
                    items={item}
                    title={item.value.title}
                    key={item.key}
                    date={item.value.createdDate}
                    time={item.value.createdTime}
                    color={'#29B6F6'}
                  />
                  <Divider style={{backgroundColor: '#E0E0E0'}} />
                </View>
              ) : null
            }
          />
        )}
      </View>
    </View>
  );
};

export default CompletedTasks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#81C784',
  },

  header: {
    flex: 1,
    flexDirection: 'row',
    padding: Constants.PAGE_LAYOUT.paddingHorizontal,
  },

  headerContent: {
    width: '70%',
  },

  headerContentImage: {
    width: '30%',
    paddingLeft: 5,
  },

  headerText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },

  icon: {
    height: 120,
    width: 120,
  },

  progress: {
    marginTop: 28,
  },

  progressText: {
    marginVertical: 5,
    color: '#EEEEEE',
  },

  content: {
    flex: 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: Constants.PAGE_LAYOUT.paddingHorizontal,
  },
  upcomingEventImage: {
    width: 100,
    height: 100,
    opacity: 0.5,
  },

  upcomingEvent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.6,
    height: '100%',
  },
});
