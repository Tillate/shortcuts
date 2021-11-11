import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

class SoftwareScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.mainText}>Rechercher par logiciel : </Text>


                <View style={styles.containerPhp}>
                    <Text style={styles.cardText}>Indentation du code dans PHPStorm </Text>

                    {/* Ajout du Bouton PHP Storm */}
                    <TouchableOpacity style={styles.buttons}
                    onPress = {() => this.props.navigation.navigate("Logiciel")}
                    >
                        <Text style={styles.buttonsText}>PHPStorm</Text>
                    </TouchableOpacity>
                    <View style={styles.containerButtons}>
                        <TouchableOpacity style={[styles.buttons, styles.buttonsDev]}
                        onPress = {() => this.props.navigation.navigate("Logiciel")}
                        >
                            <Text style={styles.buttonsText}>Développement</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.buttons, styles.buttonsPhp, styles.buttonsDev]}
                        onPress = {() => this.props.navigation.navigate("Logiciel")}
                        >
                            <Text style={styles.buttonsText}>PHP</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.containerPhpstorm}>
                    <Text style={styles.cardText}>Rechercher dans un projet PHP Storm </Text>
                    <TouchableOpacity style={styles.buttons}
                    onPress = {() => this.props.navigation.navigate("Logiciel")}
                    >
                        <Text style={styles.buttonsText}>PHPStorm</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.buttons, styles.buttonsDev]}
                    onPress = {() => this.props.navigation.navigate("Logiciel")}
                    >
                        <Text style={styles.buttonsText}>Développement</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default SoftwareScreen;

const styles = StyleSheet.create ({
    container: {
        alignItems: 'center',
    },
    containerPhp: {
        marginVertical:30,
        width: 270,
    },
    containerButtons: {
        display:'flex',
        flexDirection:'row',
    },
    containerPhpstorm: {
        marginVertical:30,
        width: 270,
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        width: 140,
        height: 40,
        backgroundColor:'#186BC9',
        marginVertical : 10,
        borderRadius:30,
    },
    mainText: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#114A8A',
        marginTop: 20,
    },
    cardText: {
        textAlign:'center',
        marginVertical:10,
        fontSize: 18,
        fontWeight: '500',
        color: '#114A8A',
    },
    buttonsText: {
        fontSize:16,
        fontWeight: '500',
        color: 'white',
    },
    buttonsPhp: {
        width : 80,
        marginLeft: 15,
    },
    buttonsDev: {
        backgroundColor:'#6AAFFD',
    },   
})