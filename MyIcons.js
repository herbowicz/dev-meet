import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Constants } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import expoLogo from './assets/color.png'

export default class MyIcons extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={expoLogo} />
                <Ionicons name="md-checkmark-circle" size={32} color="green" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
    logo: {
        width: 200,
        resizeMode: 'contain'
    }
});
