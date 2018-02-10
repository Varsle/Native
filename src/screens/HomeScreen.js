import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HelpCategoryListView from '../components/HelpCategoryListView';


export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <HelpCategoryListView />
      </View>
    );
  }
}
