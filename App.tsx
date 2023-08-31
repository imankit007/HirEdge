/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView } from 'react-native';
import Welcome from './app/views/welcome/Welcome';
import { Provider } from 'react-redux';
import store from './app/store';
import Login from './app/views/login/Login';

function App(): JSX.Element {
  return (<Provider store={store}>
    <SafeAreaView style={{
      width: '100%',
      height: '100%'
    }}>
      {/* <Welcome /> */}
      <Login />
    </SafeAreaView>
  </Provider>
  );
}
export default App;
