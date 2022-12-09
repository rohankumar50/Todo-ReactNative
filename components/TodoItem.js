import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Constants from './Constants';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Menu} from 'react-native-paper';
import database from '@react-native-firebase/database';

const TodoItem = ({
  items,
  title,
  date,
  time,
  reminder,
  color,
  handleChecked,
  navigation,
}) => {
  const [checked, setChecked] = useState(false);

  const completedTask = () => {
    const todoRef = database().ref('/Todos').child(items.keys);
    todoRef.update({
      completed: !items.value.completed,
    });
  };
  const deleteTodo = () => {
    const todoRef = database().ref(`/Todos/${items.keys}`);
    todoRef.remove();
  };

  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <View style={styles.container}>
      <View style={styles.checkBoxContainer}>
        <BouncyCheckbox
          fillColor={color}
          size={20}
          isChecked={items.value.completed}
          onPress={completedTask}
          textStyle={styles.todo}
        />
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('updateTodo', {
              title: title,
              description: items.value.description,
              keys: items.keys,
              reminder: items.value.reminder,
            })
          }>
          <Text
            style={{
              color: Constants.TEXT_COLOR.color,
              fontSize: 20,
              textTransform: 'capitalize',
            }}>
            {title}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.createdDot}></View>
            <Text style={{color: '#9E9E9E', fontSize: 10}}>
              {'Created: ' + time}
            </Text>
          </View>
          {reminder ? (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.reminderDot}></View>
              <Text style={{color: '#9E9E9E', fontSize: 10}}>
                {'Reminder: ' + reminder}
              </Text>
            </View>
          ) : (
            ''
          )}
        </TouchableOpacity>
      </View>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <TouchableOpacity
            onPress={openMenu}
            style={{width: 20, alignItems: 'center'}}>
            <Image
              style={{width: 10, height: 20}}
              source={require('../assets/dots.png')}
            />
          </TouchableOpacity>
        }>
        <Menu.Item onPress={() => {}} title="Edit" />
        <Menu.Item onPress={() => deleteTodo()} title="Delete" />
      </Menu>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginTop: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 5,
    shadowRadius: 3,
    shadowColor: '#BDBDBD',
    shadowOffset: {width: -1, height: 1},
    shadowOpacity: 0.2,
  },

  checkBoxContainer: {
    flexDirection: 'row',
  },
  todo: {
    color: '#757575',
    fontWeight: '300',
    fontSize: 16,
    marginVertical: 10,
  },
  deleteIcon: {
    width: 20,
    height: 20,
  },

  reminderDot: {
    width: 8,
    height: 8,
    backgroundColor: '#FF8F00',
    borderRadius: 50,
    marginRight: 3,
    shadowRadius: 3,
    shadowColor: '#BDBDBD',
    shadowOffset: {width: -1, height: 1},
    shadowOpacity: 0.2,
  },
  createdDot: {
    width: 8,
    height: 8,
    backgroundColor: 'green',
    borderRadius: 50,
    marginRight: 3,
    shadowRadius: 3,
    shadowColor: '#BDBDBD',
    shadowOffset: {width: -1, height: 1},
    shadowOpacity: 0.2,
  },
});
