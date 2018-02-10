import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import firebase from '../firebase'

export default class HelpCategoryListView extends React.Component {

  componentWillMount() {
    firebase.database().ref('/categories/').once('value')
      .then((snap) => {
        var categories = firebase.toArray(snap)
        console.log(categories)
      })


      // Code for pushing a new object to db
      // Push generates a new unique ID
      firebase.database().ref().child('issues').push().set({
        body: 'Noen har bæsja på gata',
        location: {lat: 123123, lon: 1231312},
        phoneNumber: 12345678
      })
  }

  render() {
    return(
      <View />
    )
  }
}
