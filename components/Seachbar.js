import {FlatList, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useState} from 'react';
import {useEffect} from 'react';
import database from '@react-native-firebase/database';
import TodoItem from './TodoItem';
import {Divider} from 'react-native-paper';
import {useRef} from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Seachbar = ({navigation}) => {
  const [searchedText, setSearchedText] = useState('my todo');
  const [todos, setTodos] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const searchRef = useRef();

  useEffect(() => {
    const todos = database().ref('/Todos');
    const onLoading = todos.on('value', snapshot => {
      setTodos([]);
      setOriginalData([]);
      snapshot.forEach(function (childSnapshot) {
        const value = childSnapshot.val();
        const key = {keys: childSnapshot.key};
        const data = {...key, value};
        setTodos(todos => [...todos, data]);
        setOriginalData(originalData => [...originalData, data]);
      });
    });

    return () => {
      todos.off('value', onLoading);
    };
  }, []);

  const onSearch = txt => {
    if (txt != '') {
      let tempData = todos.filter(item => {
        return item.value.title.toLowerCase().indexOf(txt.toLowerCase()) > -1;
      });

      setTodos(tempData);
    } else {
      setTodos(originalData);
    }
  };

  return (
    <View style={styles.searchBarContainer}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          backgroundColor: '#EEEEEE',
          borderRadius: 100,
        }}
        onPress={() => setIsClicked(!isClicked)}>
        <Text
          style={{
            color: '#111',
            padding: 15,
            width: '85%',
            textTransform: 'capitalize',
          }}>
          {searchedText}
        </Text>
        <MaterialIcons
          name="search"
          style={{
            color: '#111',
            fontSize: 32,
            color: '#757575',
            alignSelf: 'center',
          }}
        />
      </TouchableOpacity>
      {isClicked ? (
        <View style={styles.dropdownArea}>
          <TextInput
            placeholder="Search"
            placeholderTextColor={'#111'}
            style={styles.searchInput}
            onChangeText={txt => onSearch(txt)}
            ref={searchRef}></TextInput>
          <FlatList
            style={styles.list}
            data={todos}
            renderItem={({item}) => (
              <View>
                <TouchableOpacity
                  onPress={() => {
                    setSearchedText(item.value.title);
                    onSearch('');
                    setIsClicked(false);
                    searchRef.current.clear();
                    navigation.navigate('updateTodo', {
                      title: item.value.title,
                      description: item.value.description,
                      keys: item.keys,
                      reminder: item.value.reminder,
                    });
                  }}>
                  <Text
                    style={{
                      color: '#111',
                      fontSize: 16,
                      paddingVertical: 20,
                      textTransform: 'capitalize',
                    }}>
                    {item.value.title}
                  </Text>
                </TouchableOpacity>
                <Divider style={{backgroundColor: '#E0E0E0'}} />
              </View>
            )}
          />
        </View>
      ) : null}
    </View>
  );
};

export default Seachbar;

const styles = StyleSheet.create({
  searchBarContainer: {
    // backgroundColor: '#EEEEEE',
    color: '#111',
    fontWeight: '500',
    // padding: 10,
    borderRadius: 8,
    marginTop: 25,
    shadowRadius: 3,
    shadowColor: '#BDBDBD',
    shadowOffset: {width: -1, height: 1},
    shadowOpacity: 0.2,
  },
  dropdownArea: {
    backgroundColor: '#EEEEEE',
    width: '100%',
    height: 300,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: 'center',
  },

  list: {
    marginVertical: 10,
    width: '90%',
    alignSelf: 'center',
  },

  searchInput: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#BDBDBD',
    alignSelf: 'center',
    marginTop: 20,
    paddingLeft: 15,
  },
});
