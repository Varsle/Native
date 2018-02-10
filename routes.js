import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';

import SplashScreen from './src/screens/SplashScreen'
import HomeScreen from './src/screens/HomeScreen'
import SubmissionScreen from './src/screens/SubmissionScreen'

import CameraScreen from './src/screens/CameraScreen'
import CategoryScreen from './src/screens/CategoryScreen'
import HelpCategoryListView from './src/components/HelpCategoryListView'



export const Main = StackNavigator({
  MainScreen: { screen: HomeScreen },
  HelpCategoryListView: {screen: HelpCategoryListView},
  Category: {screen: CategoryScreen},
  Submission: {screen: SubmissionScreen}
}, {
  headerMode: 'none',
})
