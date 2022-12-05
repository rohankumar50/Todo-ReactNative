import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Constants from '../components/Constants';
import ProgressBar from '../components/ProgressBar';
import CurrentDate from '../components/CurrentDate';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodo, RemoveTodo } from '../redux/actions/todoActions/TodoActions';
import TodoItem from '../components/TodoItem';

const AllTasks = () => {

  const ms = ["data1", "data1", "data1", "data1", "data1", "data1", "data1", "data1", "data1", "data1", "data1", "data1", "data1"]
  const [todoValue, setTodoValue] = useState('');
  const dispatch = useDispatch();
  const data = useSelector(state => state);
  // const todos = data.todos.todos;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.headerText}>All Todos</Text>
            <CurrentDate />
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
        <Text style={{ color: '#111' }}>todays todos</Text>
        <View>
          <FlatList
            data={ms}
            renderItem={({ item }) => <TodoItem items={item} color={"#BA68C8"} />}
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
    width: '70%'
  },

  headerContentImage: {
    width: '30%',
    paddingLeft: 5,
  },

  headerText: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold'
  },

  icon: {
    height: 130,
    width: 100
  },

  progress: {
    marginTop: 20
  },

  progressText: {
    marginVertical: 5
  },

  content: {
    flex: 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: Constants.PAGE_LAYOUT.paddingHorizontal
  },


});
