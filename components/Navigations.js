import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Catelog from '../screens/Catelog';
import AllTasks from '../screens/AllTasks';
import CurrentTasks from '../screens/CurrentTasks';
import CompletedTasks from '../screens/CompletedTasks';
import OverdueTasks from '../screens/OverdueTasks';
import CreateTodos from '../screens/CreateTodos';

const Stack = createStackNavigator();

const Navigations = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="catelog"
          component={Catelog}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="allTasks"
          component={AllTasks}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="createTodo"
          component={CreateTodos}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="currentTasks"
          component={CurrentTasks}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="completedTasks"
          component={CompletedTasks}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="overdueTasks"
          component={OverdueTasks}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigations;
