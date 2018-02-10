import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// In this file we can do any bootstrapping or firebase communications
// Needed before the actual app is shown

export default class SplashScreen extends React.Component {

    componentDidMount() {
        //TODO: This is very placeholder
        setTimeout(() => {
            this.props.navigation.navigate('Main')
        }, 1500)
    }
    
    render() {
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Splash Screen! Very Nice</Text>
        </View>
        );
    }
}
