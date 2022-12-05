import {
  Alert,
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import database from '@react-native-firebase/database';
import React, {useEffect, useState} from 'react';
import Constants from '../components/Constants';
import ProgressBar from '../components/ProgressBar';
import CurrentDate from '../components/CurrentDate';
import {useDispatch, useSelector} from 'react-redux';
import {AddTodo, RemoveTodo} from '../redux/actions/todoActions/TodoActions';
import TodoItem from '../components/TodoItem';
import {todaysDay, date} from '../components/CurrentTimeDate';
import {TextInput} from 'react-native-gesture-handler';
import {ref, set} from 'firebase/database';
const CreateTodos = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  //   const [todoData, setTodoData] = useState([]);
  const todaysDate = todaysDay + ', ' + date;
  const createMyTodo = () => {
    database()
      .ref('Todos/')
      .push({
        title,
        description,
        todaysDate,
      })
      .then(data => {
        setTitle('');
        setDescription('');
        navigation.navigate('catelog');
      })
      .catch(error => {
        //error callback
        console.log('error ', error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContentImage}>
          <Image
            source={require('../assets/human_CreateTodo.png')}
            style={styles.icon}
          />
        </View>
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>Create Your Todo</Text>
          <Text style={styles.day}>{todaysDay}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <View style={styles.content}>
        {/* <Text style={{color: '#111'}}>todays todos</Text> */}
        <TextInput
          placeholder="Title"
          placeholderTextColor="#BDBDBD"
          style={styles.title}
          value={title}
          onChangeText={data => setTitle(data)}
        />
        <TextInput
          placeholder="Want to write something about that"
          placeholderTextColor="#BDBDBD"
          multiline={true}
          style={styles.description}
          value={description}
          onChangeText={data => setDescription(data)}
        />
        <TouchableOpacity style={styles.createButton} onPress={createMyTodo}>
          <Text style={styles.cardText}>Create Your Todo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateTodos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F50057',
  },

  header: {
    flex: 1,
    padding: Constants.PAGE_LAYOUT.paddingHorizontal,
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },

  headerContent: {
    alignItems: 'center',
  },

  headerContentImage: {
    paddingLeft: 5,
  },

  headerText: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
  },

  icon: {
    height: 150,
    width: 100,
  },
  day: {
    fontSize: 42,
    color: '#fff',
  },
  date: {
    color: '#fff',
    fontSize: 18,
  },
  content: {
    flex: 1.5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: Constants.PAGE_LAYOUT.paddingHorizontal,
  },

  title: {
    backgroundColor: '#EEEEEE',
    color: '#111',
    fontWeight: '500',
    padding: 10,
    borderRadius: 8,
    marginTop: 25,
  },
  description: {
    flexDirection: 'column',
    backgroundColor: '#EEEEEE',
    color: '#111',
    padding: 10,
    fontWeight: '500',
    borderRadius: 8,
    marginTop: 10,
    height: 200,
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
  },
  createButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#F50057',
  },
  cardText: {
    fontSize: 13,
    color: '#fff',
    fontWeight: 'bold',
  },
});
