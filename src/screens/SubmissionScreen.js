import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Button, Container, Header, Content, Text, Item, Input, Icon } from 'native-base'
import { human } from 'react-native-typography'


import HelpCategoryListView from '../components/HelpCategoryListView'

import GPS from '../tools/gps'
import firebase from '../firebase'

export default class SubmissionScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        currentPhotoURI: 'https://png.icons8.com/windows/1600/picture.png'
    }
  }

  cameraReturn(photoURI) {
    this.setState({ currentPhotoURI: photoURI, photoTaken: true })
  }

  async sendAlert() {
      const { params } = this.props.navigation.state;
      var issue = {}
      var imageGUID = this.guid()
      issue.title = 'Hærverk'
      issue.category = 'Kommune'
      issue.date = new Date().getTime()
      issue.description = this.state.description
      var loc = await GPS.getLocationAsync()
      issue.location = {lat: loc.coords.latitude, long: loc.coords.longitude}

  }

  convertToByteArray = (input) => {
    var binary_string = this.atob(input);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
      bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes
  }
  
  atob = (input) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

    let str = input.replace(/=+$/, '');
    let output = '';

    if (str.length % 4 == 1) {
      throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
    }
    for (let bc = 0, bs = 0, buffer, i = 0;
      buffer = str.charAt(i++);

      ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
        bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
    ) {
      buffer = chars.indexOf(buffer);
    }

    return output;
  }

  

  guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
  }

  render() {
    const { params } = this.props.navigation.state;
    return (
      <Container>
        <Content style={{ marginTop: '10%' }} padder>
          <Text  style={[human.largeTitle, styles.headLineStyle]}>{params.Title}</Text>
          <TouchableOpacity
            style={{ alignSelf: 'flex-end', width: '40%', height: '30%' }}
            onPress={() => this.props.navigation.navigate('Camera', {returnData: this.cameraReturn.bind(this)})}
            transparent
          >
            <View>
                <Image style={{alignSelf: 'center', width: '100%', height: '100%'}} source={{ isStatic:true, uri: this.state.currentPhotoURI}}/>
                {!this.state.photoTaken && <Text style={[human.caption2, styles.textStyle]}>Last opp et bilde av saken</Text>}
            </View>
         </TouchableOpacity>   
          <Item style={{ marginTop: '10%' }}rounded>
            <Input style={{
                            width: 200, height: 200, margin: 10
                        }}  
                    multiline={true} 
                    placeholder='Beskriv ditt varsel her...'
                    onChangeText={(text) => this.setState({ description: text })}
                    />
          </Item>

 

          <Button
            success
            style={{ alignSelf: 'center', alignContent: 'center', marginTop: '10%' }}
            onPress={() => this.sendAlert()}
          >
            <Text>Send Varsel</Text>
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

  headLineStyle: {
      marginTop: '10%',
  },

  textStyle: {
    alignSelf: 'center'
  },

  // By default the action button appears in the top
  // of the modal. To change this simply set the bottom property to 0
  shareButton: {
    padding: 10,
    bottom: 0,
    left: 0
  }
})