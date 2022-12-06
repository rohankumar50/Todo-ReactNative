import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import database from '@react-native-firebase/database';
import Constants from '../components/Constants';
import ProgressBar from '../components/ProgressBar';
import CurrentDate from '../components/CurrentDate';
import {useDispatch, useSelector} from 'react-redux';
import {AddTodo, RemoveTodo} from '../redux/actions/todoActions/TodoActions';
import TodoItem from '../components/TodoItem';
import {Divider} from 'react-native-paper';
import {todaysDay, date} from '../components/CurrentTimeDate';

const AllTasks = () => {
  const [todos, setTodos] = useState([]);

  // const [todoValue, setTodoValue] = useState('');
  // const dispatch = useDispatch();
  // const data = useSelector(state => state);
  // const todos = data.todos.todos;

  useEffect(() => {
    const todos = database().ref('/Todos');
    const onLoading = todos.on('value', snapshot => {
      setTodos([]);
      snapshot.forEach(function (childSnapshot) {
        setTodos(todos => [...todos, childSnapshot.val()]);
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
            <Text style={styles.headerText}>All Todos</Text>
            <Text>{todaysDay + ', ' + date}</Text>
          </View>
          <View style={styles.progress}>
            <Text style={styles.progressText}>10 Todos</Text>
            <ProgressBar />
          </View>
        </View>
        <View style={styles.headerContentImage}>
          <Image source={require('../assets/human1.png')} style={styles.icon} />
        </View>
      </View>
      <View style={styles.content}>
        {/* <Text style={{color: '#111'}}>todays todos</Text> */}
        <View>
          <FlatList
            data={todos}
            renderItem={({item}) => (
              <View>
                <TodoItem
                  items={item}
                  date={item.todaysDate}
                  color={'#BA68C8'}
                />
                <Divider style={{backgroundColor: '#E0E0E0'}} />
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default AllTasks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BA68C8',
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
    fontSize: 40,
    fontWeight: 'bold',
  },

  icon: {
    height: 130,
    width: 100,
  },

  progress: {
    marginTop: 20,
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
});
