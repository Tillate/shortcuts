import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.mainText}>Rechercher par : </Text>

                <View style={styles.containerButton}>
                    {/* Ajout du Bouton Catégorie */}
                    <TouchableOpacity style={styles.buttons}
                    onPress = {() => this.props.navigation.navigate("Category")}
                    >
                        <Text style={styles.buttonsText}>Catégorie</Text>
                    </TouchableOpacity>
                    {/* Ajout du Bouton Logiciel */}
                    <TouchableOpacity style={styles.buttons}
                    onPress = {() => this.props.navigation.navigate("Software")}
                    >
                        <Text style={styles.buttonsText}>Logiciel</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.mainText}>Ou bien : </Text>
                {/* Ajout du Bouton Ajouter un raccourci */}
                <TouchableOpacity style={[styles.buttons, styles.shortcutButton]}
                onPress = {() => this.props.navigation.navigate("Shortcuts")}
                >
                    <Text style={[styles.buttonsText, styles.shortcutText]}>Ajouter un raccourci</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default HomeScreen;

// Style de la page HOME
const styles = StyleSheet.create ({
    container: {
    display: 'flex',
    flex:1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#DBE0DE',
    },
    mainText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#114A8A',
    },
    buttonsText: {
        fontSize:18,
        fontWeight: '500',
        color: '#114A8A',
    },
    containerButton: {
        display:'flex',
        flexDirection: 'row',
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor : 'transparent',
        borderStyle: 'solid',
        borderColor: '#114A8A',
        borderWidth: 2,
        width: 160,
        height: 75,
        borderRadius: 50,
        marginHorizontal: 15,
    },
    shortcutButton: {
        backgroundColor : '#114A8A',
        width:350,
        height:100,
        borderRadius: 50,
        marginBottom: 50,
    },
    shortcutText: {
        color : 'white',
        fontSize: 20,
    },
})

