import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navigations from './components/Navigations';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import RootReducer from './redux/reducers/RootReducer';

const store = createStore(
  RootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const App = () => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#fff',
    },
  };
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <Navigations />
      </PaperProvider>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
