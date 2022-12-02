import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Constants from '../components/Constants';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import UpcomingItem from '../components/UpcomingItem';

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

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.welcomeTextContainer}>
          <Text style={styles.welcomeText}>Hi there !</Text>
          <Text style={{...styles.welcomeText, fontSize: 32}}>
            It's {todayDay}
          </Text>
        </View>

        <TextInput placeholder="Search Your Task" style={styles.searchBar} />
        <View style={styles.content}>
          <View>
            <Text style={styles.heading}>My Tasks</Text>
            <Text style={styles.shortText}>Organize Your task</Text>
            <View style={styles.cardContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate('allTasks')}
                style={{...styles.card, backgroundColor: '#BA68C8'}}>
                <Image
                  style={styles.cardImage}
                  source={require('../assets/all_task.png')}></Image>
                <Text style={styles.cardText}>All Task</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('currentTasks')}
                style={{...styles.card, backgroundColor: '#29B6F6'}}>
                <Image
                  style={styles.cardImage}
                  source={require('../assets/current_task.png')}></Image>
                <Text style={styles.cardText}>Current Task </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('completedTasks')}
                style={{...styles.card, backgroundColor: '#81C784'}}>
                <Image
                  style={styles.cardImage}
                  source={require('../assets/completed_task.png')}></Image>
                <Text style={styles.cardText}>Completed Task</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('overdueTasks')}
                style={{...styles.card, backgroundColor: '#EC407A'}}>
                <Image
                  style={styles.cardImage}
                  source={require('../assets/overdue_task.png')}></Image>
                <Text style={styles.cardText}>Overdue Task</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={styles.shortText}>Upcoming Tasks</Text>
            {/* <UpcomingItem/> */}
            <View style={styles.upcomingEvent}>
              <Image
                source={require('../assets/upcoming.png')}
                style={styles.upcomingEventImage}
              />
              <Text style={{marginTop: 20, color: '#757575'}}>
                There is no upcoming Task
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Catelog;

const styles = StyleSheet.create({
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
  upcomingStyle: {},
  upcomingText: {
    color: '#757575',
    fontWeight: '300',
    fontSize: 16,
  },
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
  },
  searchBar: {
    backgroundColor: '#fff',
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
});