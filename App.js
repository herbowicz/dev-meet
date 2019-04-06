import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyIcons from './MyIcons'
import MyFlatList from './MyFlatList'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MyIcons />
        <MyFlatList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
