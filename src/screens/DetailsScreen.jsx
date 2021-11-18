import React from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function DetailsScreen(props) {
  const { shortcut } = props.route.params;
  console.log(props.route.params);
  
  const shortcutJsx = shortcut.categories.map((s) => (
  <Text key={s.id}>{s.name}</Text>));


    return (
        <View style={styles.menu}>
            <Text style={styles.pickerTitle}>{shortcut.title}</Text>
            <TouchableOpacity style={styles.buttonsShort}> {shortcutJsx} </TouchableOpacity>
            <TouchableOpacity style={styles.buttonsSoft}> {shortcut.software.name} </TouchableOpacity>
            <Text style={styles.h2}>Windows
                <Text style={styles.p}>{shortcut.windows}</Text>
            </Text>
            <Text style={styles.h2}>Mac 
                <Text style={styles.p}>{shortcut.macos}</Text>
            </Text>
            <Text style={styles.h2}>Linux
            <Text>{shortcut.linux}</Text>
            </Text>
            <Text style={styles.h2}>Contexte :</Text>
            <Text style={styles.p}>{shortcut.context}</Text>
            <Text>Description :</Text>
            <Text style={styles.p}>{shortcut.description}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    menu: {
        height: "100%",
        alignItems: "center",
        marginTop: 20,
      },
    h2: {
        fontSize: 16,
        fontWeight: 500,
    },
    p:{
        fontWeight:400,
        marginLeft:15,
    },
    buttonsShort: {
        backgroundColor: '#186BC9',
        color: 'white',
        width: 180,
        borderRadius: 5,
        marginHorizontal: 5,
        padding: 5,
        fontSize: 16,
        fontWeight:500,
        textAlign: 'center',
      },
      buttonsSoft: {
        backgroundColor: '#6AAFFD',
        color: 'white',
        width: 180,
        borderRadius: 5,
        padding: 5,
        marginVertical: 10,
        marginHorizontal: 5,
        fontSize: 16,
        fontWeight:500,
        textAlign: 'center',
      },
      pickerTitle: {
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: 600,
        fontSize:18,
      },
  });
  