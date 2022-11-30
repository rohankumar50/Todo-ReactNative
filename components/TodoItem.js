import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Constants from './Constants';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const TodoItem = () => {
  const [checked, setChecked] = useState(false);
  const aaa = 'Task 1';
  return (
    <View style={styles.container}>
      {/* <Text style={{color: '#FF5722'}}>TodoItem</Text> */}
      <BouncyCheckbox
        text={aaa}
        fillColor="#FF5722"
        size={20}
        textStyle={{fontSize: 12}}
        isChecked={checked}
        onPress={() => {
          setChecked(!checked);
        }}
        textStyle={styles.todo}
        // style={}
      />
      <BouncyCheckbox
        text={aaa}
        fillColor="#FF5722"
        size={20}
        textStyle={{fontSize: 12}}
        isChecked={checked}
        onPress={() => {
          setChecked(!checked);
        }}
        textStyle={styles.todo}
      />
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
  },
  todo: {
    color: Constants.PRIMARY_COLOR,
    fontWeight: '600',
    fontSize:16,
    marginVertical:10
  },
});
