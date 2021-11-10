import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class HomeScreen extends Component {
    render() {
        return (
            <View>
                <Text>Rechercher par : </Text>
                <TouchableOpacity
                onPress = {() => this.props.navigation.navigate("Category")}
                >
                    <Text>Catégorie</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress = {() => this.props.navigation.navigate("Software")}
                >
                    <Text>Logiciel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress = {() => this.props.navigation.navigate("Shortcuts")}
                >
                    <Text>Ajouter un raccourci</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default HomeScreen;
