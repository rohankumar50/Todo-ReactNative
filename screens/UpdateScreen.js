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
import React, {useEffect, useState} from 'react';
import Constants from '../components/Constants';
import {todaysDay, date} from '../components/CurrentTimeDate';
import {TextInput} from 'react-native-gesture-handler';
import DatePicker from 'react-native-date-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const UpdateScreen = ({route, navigation}) => {
  const {title, description, keys, reminder} = route.params;

  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedDescription, setUpdatedDescription] = useState(description);

  const [newReminder, setNewReminder] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [reminderText, setReminderText] = useState(reminder);
  const [isReminder, setIsReminder] = useState(false);

  const setDatePicker = date => {
    setNewReminder(date);
    setReminderText(true);
    setIsReminder(true);
  };

  const cancelDatePicker = () => {
    setNewReminder(new Date());
    setOpen(false);
    setReminderText(false);
    setIsReminder(false);
  };

  const updateTodo = () => {
    const todoRef = database().ref('/Todos').child(keys);
    todoRef
      .update({
        title: updatedTitle,
        description: updatedDescription,
        reminder: isReminder == true ? newReminder.toLocaleString() : false,
        isReminder,
      })
      .then(() =>
        Alert.alert('Todo', 'You updated your todo', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'Ok',
            onPress: () => navigation.navigate('catelog'),
          },
        ]),
      );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContentImage}>
          <Image
            source={require('../assets/human_updatePage.png')}
            style={styles.icon}
          />
        </View>
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>Your Todo</Text>
          <Text style={styles.day}>{todaysDay}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <View style={styles.content}>
        <DatePicker
          modal
          open={open}
          date={newReminder}
          androidVariant={'nativeAndroid'}
          fadeToColor={'red'}
          onConfirm={date => {
            setDatePicker(date);
            setOpen(false);
          }}
          onCancel={cancelDatePicker}
        />
        <TouchableOpacity
          style={styles.reminderContainer}
          onPress={() => setOpen(true)}>
          {/* <Image
            source={require('../assets/bell.png')}
            style={{width: 20, height: 20}}
          /> */}
          <MaterialIcons
            name="alarm"
            style={{
              color: '#111',
              fontSize: 28,
              color: '#6200EA',
              alignSelf: 'center',
              padding: 5,
            }}
          />
          {reminderText ? (
            <Text style={styles.reminderText}>
              {newReminder.toLocaleString()}
            </Text>
          ) : (
            <Text style={styles.reminderText}>Set Reminder</Text>
          )}
        </TouchableOpacity>
        <TextInput
          placeholder="Title"
          placeholderTextColor="#BDBDBD"
          style={styles.title}
          value={updatedTitle}
          onChangeText={data => setUpdatedTitle(data)}
        />
        <TextInput
          placeholder="Want to write something about that"
          placeholderTextColor="#BDBDBD"
          multiline={true}
          style={styles.description}
          value={updatedDescription}
          onChangeText={data => setUpdatedDescription(data)}
        />

        <TouchableOpacity style={styles.createButton} onPress={updateTodo}>
          <Text style={styles.cardText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UpdateScreen;

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
    backgroundColor: '#6200EA',
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
    marginTop: 12,
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
  },

  icon: {
    height: 130,
    width: 140,
  },
  day: {
    fontSize: 32,
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
    backgroundColor: '#6200EA',
  },
  cardText: {
    fontSize: 13,
    color: '#fff',
    fontWeight: 'bold',
  },
});
