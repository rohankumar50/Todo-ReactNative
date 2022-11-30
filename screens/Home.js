import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {RightArrow} from '../assets/rightArrow.svg';
import TodoItem from '../components/TodoItem';
import Constants from '../components/Constants';
const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.inputArea}>
          <TextInput placeholder="Add Todo" style={styles.inputText} />
          <TouchableOpacity style={styles.inputButton}>
            <Image
              style={styles.icon}
              source={require('../assets/plus_white.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.todoItemContainer}>
          <TodoItem />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center',
  },

  content: {
    flex: 1,
    width: '80%',
    marginTop: 20,
    // backgroundColor: '#9E9E9E',
  },

  inputArea: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  inputText: {
    backgroundColor: Constants.PRIMARY_COLOR,
    color: '#fff',
    fontWeight: '900',
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
    width: '85%',
    shadowRadius: 3,
    shadowColor: '#FF7043',
    shadowOffset: {width: -1, height: 1},
    shadowOpacity: 0.2,
  },

  inputButton: {
    display: 'flex',
    width: 40,
    height: 40,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Constants.PRIMARY_COLOR,
    shadowRadius: 3,
    shadowColor: '#FF7043',
    shadowOffset: {width: -1, height: 1},
    shadowOpacity: 0.2,
  },

  icon: {
    width: 20,
    height: 20,
  },

  todoItemContainer: {
    marginTop: 10,
  },
});
