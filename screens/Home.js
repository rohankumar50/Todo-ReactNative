import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import TodoItem from '../components/TodoItem';
import Constants from '../components/Constants';
import {useDispatch, useSelector} from 'react-redux';
import {AddTodo, RemoveTodo} from '../redux/actions/todoActions/TodoActions';

const Home = () => {
  const [todoValue, setTodoValue] = useState('');
  const dispatch = useDispatch();
  const data = useSelector(state => state);
  const todos = data.todos.todos;

  const addItem = () => {
    if (todos && !todos.includes(todoValue)) {
      dispatch(AddTodo(todoValue));
      setTodoValue('');
    } else {
      alert(`${todoValue} already added in Todo list`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.inputArea}>
          <TextInput
            placeholder="Add Todo"
            style={styles.inputText}
            value={todoValue}
            onChangeText={data => setTodoValue(data)}
          />
          <TouchableOpacity style={styles.addItemButton} onPress={addItem}>
            <Image
              style={styles.icon}
              source={require('../assets/plus_white.png')}
            />
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={todos}
            renderItem={({item}) => <TodoItem items={item} />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6fafb',
    padding: 10,
    alignItems: 'center',
  },

  content: {
    flex: 1,
    width: '80%',
    marginTop: 20,
  },

  inputArea: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  inputText: {
    backgroundColor: '#fff',
    color: '#111',
    fontWeight: '500',
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
    width: '85%',
    shadowRadius: 3,
    shadowColor: '#BDBDBD',
    shadowOffset: {width: -1, height: 1},
    shadowOpacity: 0.2,
  },

  addItemButton: {
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
