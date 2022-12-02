import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const UpcomingItem = ({items}) => {
  const [checked, setChecked] = useState(false);
  const deleteTodo = () => {
    console.log('sdfd');
  };
  return (
    <View style={styles.container}>
      <BouncyCheckbox
        text="Upcoming Task"
        fillColor="#FF5722"
        size={20}
        isChecked={checked}
        onPress={() => {
          setChecked(!checked);
        }}
        textStyle={styles.todo}
      />
    </View>
  );
};

export default UpcomingItem;

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
    shadowOpacity: 0.3,
  },
  todo: {
    color: '#757575',
    fontWeight: '300',
    fontSize: 16,
  },
  deleteIcon: {
    width: 20,
    height: 20,
  },
});
