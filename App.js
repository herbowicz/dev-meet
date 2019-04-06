import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import MyButton from './MyButton'
import MyFlatList from './MyFlatList'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Test!</Text>
        {/* <MyButton /> */}
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
