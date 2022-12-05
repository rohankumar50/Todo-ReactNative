import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Constants from './Constants';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { date } from './CurrentTimeDate';

const TodoItem = ({ items, color }) => {
  const [checked, setChecked] = useState(false);
  const deleteTodo = () => {
    console.log('sdfd');
  };

  const createdDate = date

  return (
    <View style={styles.container}>
      <View style={styles.checkBoxContainer}>
        <BouncyCheckbox
          // text={date}
          fillColor={color}
          size={20}
          isChecked={checked}
          onPress={() => {
            setChecked(!checked);
          }}
          textStyle={styles.todo}
        />
        <View>
          <Text style={{ color: Constants.TEXT_COLOR.color, fontSize: 20 }}>my text</Text>
          <Text style={{ color: '#9E9E9E', fontSize: 10 }}>{createdDate}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={deleteTodo}>
        <Image
          style={styles.deleteIcon}
          source={require('../assets/remove.png')}
        />
      </TouchableOpacity>
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
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 0.2,
  },

  checkBoxContainer: {
    flexDirection: 'row'
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
});
