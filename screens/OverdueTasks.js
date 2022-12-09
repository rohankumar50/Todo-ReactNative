import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import database from '@react-native-firebase/database';
import Constants from '../components/Constants';
import ProgressBar from '../components/ProgressBar';
import CurrentDate from '../components/CurrentDate';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodo, RemoveTodo } from '../redux/actions/todoActions/TodoActions';
import TodoItem from '../components/TodoItem';
import { Divider } from 'react-native-paper';
import { todaysDay, date, currentTime } from '../components/CurrentTimeDate';
const OverdueTasks = ({ navigation }) => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const [todayDateAndTime, setTodaysDateAndTime] = useState(
    new Date().toLocaleString(),
  );
  useEffect(() => {
    const todos = database().ref('/Todos');
    const onLoading = todos.on('value', snapshot => {
      setTodos([]);
      setCount(snapshot.numChildren());
      snapshot.forEach(function (childSnapshot) {
        const value = childSnapshot.val();
        const key = { keys: childSnapshot.key };
        const data = { ...key, value };
        setTodos(todos => [...todos, data]);
      });
    });

    return () => {
      todos.off('value', onLoading);
    };
  }, []);

  useEffect(() => {
    // var date1 = new Date('12/13/2022, 10:39:00 PM');
    // var date2 = new Date('12/12/2022, 10:39:00 PM');
    // console.log(date1.getTime() > date2.getTime());
  }, [todayDateAndTime]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.headerText}>Overdue Todo's</Text>
            <Text>{todaysDay + ', ' + date}</Text>
          </View>
          <View style={styles.progress}>
            <Text style={styles.progressText}>{count} Todo's</Text>
            <ProgressBar />
          </View>
        </View>
        <View style={styles.headerContentImage}>
          <Image source={require('../assets/human9.png')} style={styles.icon} />
        </View>
      </View>
      <View style={styles.content}>
        <View>
          {count === 0 ? (
            <View style={styles.upcomingEvent}>
              <Image
                style={styles.upcomingEventImage}
                source={require('../assets/upcoming.png')}></Image>
              <Text style={{ color: '#111', marginTop: 10 }}>
                No upcoming events
              </Text>
            </View>
          ) : (
            <FlatList
              data={todos.filter(data => {
                count++
                setCount(count)
                return data.value.completed === false && data.value.isReminder === true && (Date.parse(todayDateAndTime) > Date.parse(data.value.reminder)); // prints true (correct)
              })}
              renderItem={({ item }) => (

                <View>
                  <TodoItem
                    items={item}
                    title={item.value.title}
                    description={item.value.description}
                    key={item.keys}
                    date={item.value.createdDate}
                    time={item.value.createdTime}
                    reminder={item.value.reminder}
                    color={'#EC407A'}
                    navigation={navigation}
                  />
                  <Divider style={{ backgroundColor: '#E0E0E0' }} />
                </View>
              )}
            />
          )}
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
