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

const CurrentTasks = () => {
  const ms = [
    'data1',
    'data1',
    'data1',
    'data1',
    'data1',
    'data1',
    'data1',
    'data1',
    'data1',
    'data1',
    'data1',
    'data1',
    'data1',
  ];
  const [todoValue, setTodoValue] = useState('');
  const dispatch = useDispatch();
  const data = useSelector(state => state);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.headerText}>Current Todos</Text>
            <CurrentDate />
          </View>
          <View style={styles.progress}>
            <Text style={styles.progressText}>10 Todos</Text>
            <ProgressBar />
          </View>
        </View>
        <View style={styles.headerContentImage}>
          <Image source={require('../assets/human8.png')} style={styles.icon} />
        </View>
      </View>
      <View style={styles.content}>
        <Text>todays task</Text>
        <Text style={{color: '#111'}}>todays task</Text>
        <View>
          <FlatList
            data={ms}
            renderItem={({item}) => <TodoItem items={item} color={'#29B6F6'} />}
          />
        </View>
      </View>
    </View>
  );
};

export default CurrentTasks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#29B6F6',
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
});
