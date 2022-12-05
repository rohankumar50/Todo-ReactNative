import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Constants from '../components/Constants';
import TodoItem from '../components/TodoItem';
import {Divider} from 'react-native-paper';

const Catelog = ({navigation}) => {
  const [todayDay, setTodayDay] = useState('');

  useEffect(() => {
    const weekday = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    const d = new Date();
    setTodayDay(weekday[d.getDay()]);
  }, []);
  const ms = ['data1'];

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.welcomeTextContainer}>
          <Text style={styles.welcomeText}>Hi there !</Text>
          <Text style={{...styles.welcomeText, fontSize: 32}}>
            It's {todayDay}
          </Text>
        </View>

        <TextInput
          placeholder="Search Your Todos"
          placeholderTextColor="#BDBDBD"
          style={styles.searchBar}
        />
        <View style={styles.content}>
          <View>
            <Text style={styles.heading}>My Todos</Text>
            <Text style={styles.shortText}>Organize Your task</Text>
            <View style={styles.cardContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate('allTasks')}
                style={{...styles.card, backgroundColor: '#BA68C8'}}>
                <Image
                  style={styles.cardImage}
                  source={require('../assets/all_task.png')}></Image>
                <Text style={styles.cardText}>All Todos</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('currentTasks')}
                style={{...styles.card, backgroundColor: '#29B6F6'}}>
                <Image
                  style={styles.cardImage}
                  source={require('../assets/current_task.png')}></Image>
                <Text style={styles.cardText}>Current Todos </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('completedTasks')}
                style={{...styles.card, backgroundColor: '#81C784'}}>
                <Image
                  style={styles.cardImage}
                  source={require('../assets/completed_task.png')}></Image>
                <Text style={styles.cardText}>Completed Todos</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('overdueTasks')}
                style={{...styles.card, backgroundColor: '#EC407A'}}>
                <Image
                  style={styles.cardImage}
                  source={require('../assets/overdue_task.png')}></Image>
                <Text style={styles.cardText}>Overdue Todos</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('createTodo')}
              style={styles.createButton}>
              <Image
                style={styles.cardImage}
                source={require('../assets/plus_white.png')}></Image>
              <Text style={styles.cardText}>Create Your Todo</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.shortText}>Upcoming Todos</Text>
            <View>
              <FlatList
                data={ms}
                renderItem={({item}) => (
                  <View>
                    <TodoItem items={item} color={'#BA68C8'} />
                    <Divider style={{backgroundColor: '#E0E0E0'}} />
                  </View>
                )}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Catelog;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.PAGE_LAYOUT.backgroundColor,
    paddingHorizontal: Constants.PAGE_LAYOUT.paddingHorizontal,
  },
  welcomeTextContainer: {
    marginTop: 10,
  },
  welcomeText: {
    marginVertical: 5,
    color: Constants.TEXT_COLOR.color,
  },
  searchBar: {
    backgroundColor: '#EEEEEE',
    color: '#111',
    fontWeight: '500',
    padding: 10,
    borderRadius: 8,
    marginTop: 25,
    shadowRadius: 3,
    shadowColor: '#BDBDBD',
    shadowOffset: {width: -1, height: 1},
    shadowOpacity: 0.2,
  },

  content: {
    display: 'flex',
    marginTop: 30,
  },
  heading: {
    fontSize: 20,
    color: Constants.TEXT_COLOR.color,
  },
  shortText: {
    fontSize: 12,
    marginVertical: 5,
    marginTop: 12,
    color: '#757575',
  },

  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },

  card: {
    width: '47%',
    height: 100,
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },

  cardText: {
    fontSize: 13,
    color: '#fff',
    fontWeight: 'bold',
    margin: 10,
  },
  cardImage: {
    width: 20,
    height: 20,
  },

  createButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#FF5722',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },

  upcomingEventImage: {
    width: 150,
    height: 150,
  },

  upcomingEvent: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 30,
    opacity: 0.6,
  },

  upcoming: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    shadowRadius: 3,
    shadowColor: '#BDBDBD',
    shadowOffset: {width: -1, height: 1},
    shadowOpacity: 0.2,
  },
  upcomingText: {
    color: '#757575',
    fontWeight: '300',
    fontSize: 16,
  },
});
