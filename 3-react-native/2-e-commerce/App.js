import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import store from './store'
import { Provider } from 'react-redux'

import ShopNavigator from './navigation/ShopNavigator'

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <ShopNavigator/>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
