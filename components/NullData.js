import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const NullData = () => {
  return (
    <View style={styles.upcomingEvent}>
      <Image
        style={styles.upcomingEventImage}
        source={require('../assets/upcoming.png')}></Image>
      <Text style={{color: '#111', marginTop: 10}}>No upcoming events</Text>
    </View>
  );
};

export default NullData;

const styles = StyleSheet.create({
  upcomingEventImage: {
    width: 100,
    height: 100,
    opacity: 0.5,
  },

  upcomingEvent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.6,
    height: '100%',
  },
});
