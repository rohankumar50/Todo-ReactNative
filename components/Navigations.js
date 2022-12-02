import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Catelog from '../screens/Catelog';
import AllTasks from '../screens/AllTasks';
import CurrentTasks from '../screens/CurrentTasks';
import CompletedTasks from '../screens/CompletedTasks';
import OverdueTasks from '../screens/OverdueTasks';

const Stack = createStackNavigator();

const Navigations = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="catelog"
          component={Catelog}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen name="allTasks" component={AllTasks} />
        <Stack.Screen name="currentTasks" component={CurrentTasks} />
        <Stack.Screen name="completedTasks" component={CompletedTasks} />
        <Stack.Screen name="overdueTasks" component={OverdueTasks} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigations;
