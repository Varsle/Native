import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';

import SplashScreen from './src/screens/SplashScreen'
import HomeScreen from './src/screens/HomeScreen'
import CategoryScreen from './src/screens/CategoryScreen'
import HelpCategoryListView from './src/components/HelpCategoryListView'


export const Main = StackNavigator({
  SplashScreen: { screen: SplashScreen },
  MainScreen: { screen: HomeScreen },
  HelpCategoryListView: {screen: HelpCategoryListView},
  Category: {screen: CategoryScreen}
}, {
  headerMode: 'none',
  mode: 'modal'
})
