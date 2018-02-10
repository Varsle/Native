import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';

import SplashScreen from './src/screens/SplashScreen'
import HomeScreen from './src/screens/HomeScreen'
import SubmissionScreen from './src/screens/SubmissionScreen'

import CameraScreen from './src/screens/CameraScreen'


export const Main = StackNavigator({
  Main: { screen: HomeScreen },
  Submission: { screen: SubmissionScreen },
  Camera: { screen: CameraScreen }
}, {
  headerMode: 'none',
})