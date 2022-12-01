import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navigations from './components/Navigations';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import RootReducer from './redux/reducers/RootReducer';

const store = createStore(
  RootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const App = () => {
  return (
    <Provider store={store}>
      <Navigations />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
