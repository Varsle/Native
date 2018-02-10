import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Camera, Permissions } from 'expo';
import { Header, Text } from 'native-base'

export default class Cam extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  snap = async () => {
    if (this.camera) {
        let photo = await this.camera.takePictureAsync({base64: true});
        this.props.navigation.state.params.returnData(photo.uri);
        this.props.navigation.goBack()
    }
  };

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1, marginTop: '10%' }} ref={ref => { this.camera = ref; }} type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  marginBottom: '5%',
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => this.snap()}
              >
                <Image style={{width: 70, height: 70}} source={require('../../img/camera_icon.png')} />
              </TouchableOpacity> 
            </View>
          </Camera>
        </View>
      );
    }
  }
}