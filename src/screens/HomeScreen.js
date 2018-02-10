import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Button, Container, Header, Content, Text, Footer, FooterTab } from 'native-base'

import HelpCategoryListView from '../components/HelpCategoryListView'

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <Container>
        <Content style={{ marginTop: '10%' }} padder>
        <HelpCategoryListView />
          <Button
            onPress={() => this.props.navigation.navigate('Submission', {Title: 'Hærverk'})}
          >
            <Text>Submission screen</Text>
          </Button>

        </Content>
      </Container>
    );
  }
}

var styles = StyleSheet.create({
  // Style for the button that opens the photo library View
  buttonStyle: {
    marginTop: 20,
    margin: 10,
    backgroundColor: '#000'
  },

  // By default the action button appears in the top
  // of the modal. To change this simply set the bottom property to 0
  shareButton: {
    padding: 10,
    bottom: 0,
    left: 0
  }
})