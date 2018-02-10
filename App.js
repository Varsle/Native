import React from 'react';
import { StyleSheet, View, TouchableHighlight, Alert } from 'react-native';
import { Container, Text, Footer, FooterTab, Toast } from 'native-base'
import { Root } from "native-base";

import { Main } from './routes';

export default class App extends React.Component {

  render() {

    return (
      <Root>
        <Container>
          <Main />
          <TouchableHighlight 
            delayLongPress={4000}
            onPressIn ={()=>{
                    Toast.show({
                      text: 'Hold for nødsentral',
                      position: 'top',
                      style: {
                        backgroundColor: 'red',
                      },
                      duration: 3800
                    })
                  }}
            onLongPress ={(e)=>{
                    Alert.alert(
                      'Nødsentral',
                      'Ringer nødsentral...',
                      [{text: 'OK', onPress: () => console.log('OK Pressed')}]
                    )
                }}
          >
            <Footer style={{ backgroundColor: '#e53935' }}>
                <Text style={{ alignSelf: 'center', textAlign: 'center', marginTop: 5, color: 'white', fontSize: 34 }}>Nødvarsel</Text>
            </Footer>
          </TouchableHighlight>
        </Container>
      </Root>
    );
  }
}
