import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text, Platform, Button, TextInput, AsyncStorage } from 'react-native';
import { Constants } from 'expo';

// Other useful components: https://facebook.github.io/react-native/docs/components-and-apis

const textKey = 'dev-meeting:text aa';

export default class MyFlatList extends Component {
    state = {
        text: '',
        count: 100,
        items: new Array(100).fill(0).map((a, i) => i).map(i => ({
            title: `Title ${i}`,
            key: i,
            content: `Content number ${i}. It's a bit longer than title. It's even long enough to force a line break...`,
            randColor: Platform.select({ ios: '#' + Math.floor(Math.random() * 16777215).toString(16), default: 'pink' })
        })),
    };

    componentWillMount() {
        AsyncStorage.getItem(textKey).then(text => this.setState({ asyncStorageText: text }));
    }

    _keyExtractor = item => item.key.toString();

    textChanged = text => {
        this.setState({ text });
        AsyncStorage.setItem(textKey, text);
    };

    buttonPressed = () => {
        let newItems = this.state.items.slice().reverse().concat({
            title: "Title " + this.state.count,
            key: Math.floor(Math.random() * 10000),
            content: this.state.text,
            randColor: Platform.select({ ios: '#' + Math.floor(Math.random() * 16777215).toString(16), default: 'pink' })
        })
        newItems.reverse()
        this.setState({
            count: this.state.count + 1,
            items: newItems,
            text: ''
        })

    }

    render() {
        return (
            <View style={styles.container} >
                <View style={{ alignSelf: 'stretch' }}>
                    <Text>Total: {this.state.count} | New: {this.state.text}</Text>
                    <TextInput
                        style={{
                            height: 20, color: 'chartreuse', borderWidth: 1
                        }}
                        onChangeText={(text) => {
                            this.setState({ text });
                            AsyncStorage.setItem(textKey, text);
                        }}
                        value={this.state.text}
                    />
                    <Button title="Add note" onPress={this.buttonPressed} />
                    <Text>Z AsyncStorage: {this.state.asyncStorageText}</Text>
                </View>
                <FlatList keyExtractor={this._keyExtractor} data={this.state.items} renderItem={this.renderItem} />
            </View>
        )
    }
    renderItem = ({ item }) => {
        return (
            <View style={styles.item} style={{ backgroundColor: item.randColor }}>
                <Text style={styles.title}>{item.title} </Text>
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
        backgroundColor: 'darkslategrey'
    },
    item: {
        paddingHorizontal: 10,
    },
    title: {
        fontWeight: 'bold',
        marginVertical: 7,
    },
    content: {
        marginBottom: 10,
    },
});