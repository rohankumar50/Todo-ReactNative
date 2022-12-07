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
import database from '@react-native-firebase/database';
import TodoItem from '../components/TodoItem';
import {Divider} from 'react-native-paper';
import NullData from '../components/NullData';

const CurrentTasks = ({navigation}) => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const todos = database()
      .ref('/Todos')
      .orderByChild('completed')
      .equalTo(false);

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
        <View>
          {count === 0 ? (
            <NullData />
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
