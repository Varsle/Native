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
    /*
     firebase.database().ref().child('issues').push().set({
        category: 'vandalism',
        date: new Date().getTime(),
        description: 'Hallo. Noen har ødelagt min fasade!',
        photo: 'http://i0.kym-cdn.com/entries/icons/original/000/022/898/827.jpg',
        location: {lat: 58.154134, lon: 8.009333}
      }) */

      
  }

  render() {
    return(
      <View />
    )
  }
}
