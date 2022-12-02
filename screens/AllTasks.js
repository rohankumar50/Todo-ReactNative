import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Constants from '../components/Constants';

const AllTasks = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <Text>asdb</Text>
        </View>
        <View style={styles.subContent}>
          <Text>asdsad</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default AllTasks;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // backgroundColor: Constants.TEST_COLOR.backgroundColor,
    // padding: Constants.PAGE_LAYOUT.paddingHorizontal,
  },

  header: {
    // flex: 1,
    backgroundColor: '#FF5722',
  },

  content: {
    // flex: 2,
    backgroundColor: '#66BB6A',
  },

  subContent: {
    backgroundColor: '#C62828',
  },
});
