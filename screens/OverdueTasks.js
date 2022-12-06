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

const OverdueTasks = () => {
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
            <Text style={styles.headerText}>Overdue Todos</Text>
            <CurrentDate />
          </View>
          <View style={styles.progress}>
            <Text style={styles.progressText}>10 Todos</Text>
            <ProgressBar />
          </View>
        </View>
        <View style={styles.headerContentImage}>
          <Image source={require('../assets/human9.png')} style={styles.icon} />
        </View>
      </View>
      <View style={styles.content}>
        <Text>todays task</Text>
        {/* <View>
          <FlatList
            data={ms}
            renderItem={({item}) => <TodoItem items={item} color={'#EC407A'} />}
          />
        </View> */}
        <View style={styles.upcomingEvent}>
          <Image
            style={styles.upcomingEventImage}
            source={require('../assets/upcoming.png')}></Image>
          <Text style={{color: '#111', marginTop: 10}}>No upcoming events</Text>
        </View>
      </View>
    </View>
  );
};

export default OverdueTasks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EC407A',
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
    height: 140,
    width: 100,
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
