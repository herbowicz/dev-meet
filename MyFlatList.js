import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text, Platform } from 'react-native';
import { Constants } from 'expo';

// Other useful components: https://facebook.github.io/react-native/docs/components-and-apis

export default class MyFlatList extends Component {
    state = {
        items: new Array(100).fill(0).map((a, i) => i).map(i => ({
            title: `Title ${i}`,
            key: i,
            content: `Content number ${i}. It's a bit longer than title. It's even long enough to force a line break`,
            randColor: Platform.select({ ios: '#' + Math.floor(Math.random() * 16777215).toString(16), default: 'pink' })
        })),
    };

    _keyExtractor = (item, index) => item.key.toString();

    componentDidMount() {
    }

    render() {
        return (
            <View style={styles.container} >
                <FlatList keyExtractor={this._keyExtractor} data={this.state.items} renderItem={this.renderItem} />
            </View>
        )
    }

    renderItem = ({ item }) => {

        return (
            <View style={styles.item} style={{ backgroundColor: item.randColor }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.content}>{item.content}</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        margin: 0,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: 'chartreuse',
    },
    item: {
        paddingHorizontal: 10,
    },
    title: {
        fontWeight: 'bold',
        marginVertical: 5,
    },
    content: {
        marginBottom: 10,
    },
});