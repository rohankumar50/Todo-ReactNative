import {
  Alert,
  Button,
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
import React, { useEffect, useState } from 'react';
import Constants from '../components/Constants';
import { todaysDay, date } from '../components/CurrentTimeDate';
import { TextInput } from 'react-native-gesture-handler';
import DatePicker from 'react-native-date-picker';

const CreateTodos = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const createdDate = todaysDay + ', ' + date;

  const [reminder, setReminder] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [reminderText, setReminderText] = useState(false);
  const [isReminder, setIsReminder] = useState(false);
  
  const setDatePicker = date => {
    setReminder(date);
    setReminderText(true);
    setIsReminder(true);
  };

  const cancelDatePicker = () => {
    setReminder(new Date());
    setOpen(false);
    setReminderText(false);
    setIsReminder(false);
  };

  const createMyTodo = () => {
    const d = new Date();
    const createdTime = d.toLocaleTimeString();

    if (title.trim().length !== 0) {
      database()
        .ref('Todos/')
        .push({
          title,
          description,
          createdDate,
          createdTime,
          completed: false,
          reminder: reminderText === true ? reminder.toLocaleString() : false,
          isReminder,
        })
        .then(data => {
          setTitle('');
          setDescription('');
          navigation.navigate('catelog');
        })
        .catch(error => {
          console.log('error ', error);
        });
    } else {
      alert('Kindly provide title of todo');
    }
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
        <DatePicker
          modal
          open={open}
          date={reminder}
          androidVariant={'nativeAndroid'}
          fadeToColor={'red'}
          onConfirm={date => {
            setOpen(false);
            setDatePicker(date);
          }}
          onCancel={cancelDatePicker}
        />
        <TouchableOpacity
          style={styles.reminderContainer}
          onPress={() => setOpen(true)}>
          <Image
            source={require('../assets/bell.png')}
            style={{ width: 20, height: 20 }}
          />
          {reminderText ? (
            <Text style={styles.reminderText}>{reminder.toLocaleString()}</Text>
          ) : (
            <Text style={styles.reminderText}>Set Reminder</Text>
          )}
        </TouchableOpacity>
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
  reminderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  reminderText: {
    color: '#9E9E9E',
    fontWeight: '500',
  },

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
    marginTop: 10,
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
