/** @format */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import configureStore from './app/src/store/configureStore';
import Home from './app/src/components/home_component';

const store = configureStore()

const ReactReduxExample = () => (
  <Provider store={store}>
    <Home />
  </Provider>
)

AppRegistry.registerComponent(appName, () => ReactReduxExample);