import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';

import SplashScreen from './src/screens/SplashScreen'
import HomeScreen from './src/screens/HomeScreen'


export const Main = StackNavigator({
  SplashScreen: { screen: SplashScreen },
  MainScreen: { screen: HomeScreen }
}, {
  headerMode: 'none',
  mode: 'modal'
})