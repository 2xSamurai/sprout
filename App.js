/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import store from './src/redux/store';

import Router from './src/Router';


const App = () => {
  // useEffect(() => {
  //   RNBootSplash.hide({ fade: true })
  // }, []);
  
  return <SafeAreaProvider>
    <Provider store={store}>
      <Router />
    </Provider>
  </SafeAreaProvider>;
};

export default App;