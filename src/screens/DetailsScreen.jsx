import React from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function DetailsScreen(props) {
  const { shortcut } = props.route.params;
  console.log(props.route.params);
  
  const shortcutJsx = shortcut.categories.map((s) => (
    <View style={styles.contShort}>
      <Text style={styles.textShort} key={s.id}>{s.name}</Text>
    </View>
    ));

    return (
        <View style={styles.menu}>
            <Text style={styles.pickerTitle}>{shortcut.title}</Text>
            <Text style={styles.buttonsSoft}> {shortcut.software.name} </Text>
            <Text style={styles.buttonsShort}> {shortcutJsx} </Text>
            
            <View style={styles.osContainer}>
                <Text style={styles.osTitle}>Windows</Text>
                <Text style={styles.p}>{shortcut.windows}</Text>
            </View>
            
            <View style={styles.osContainer}>
                <Text style={styles.osTitle}>Mac</Text>
                <Text style={styles.p}>{shortcut.macos}</Text>
            </View>

            <View style={styles.osContainer}>
                <Text style={styles.osTitle}>Linux</Text>
                <Text style={styles.p}>{shortcut.linux}</Text>
            </View>

            <Text style={styles.h2}>Contexte :</Text>
            <Text style={styles.p}>{shortcut.context}</Text>

            <Text style={styles.h2}>Description :</Text>
            <Text style={styles.p}>{shortcut.description}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    menu: {
        marginTop: 20,
      },
    pickerTitle: {
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: "600",
        fontSize:18,
      },
    buttonsShort: {
        display: 'flex',
        flexDirection: 'row',
      },
      textShort: {
        borderRadius: 5,
        backgroundColor: '#6AAFFD',
        padding: 10,
        fontSize: 16,
        fontWeight:"500",
        textAlign: 'center',
        color: 'white',
        marginVertical: 10,
        marginLeft: 15,
    },
    buttonsSoft: {
        color: 'white',
        backgroundColor: '#186BC9',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 15,
        fontSize: 16,
        fontWeight:"bold",
        textAlign: 'center',
      },
    osContainer:{
        display: 'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'center',
      },
    osTitle: {
        width:'50%',
        fontSize: 16,
        fontWeight: "500",
        marginVertical:15,
        textAlign: 'right',
    },
    h2: {
        fontSize: 16,
        fontWeight: "600",
        marginTop:15,
        marginLeft:15,
    },
    p:{
        width:'50%',
        fontWeight:"400",
        marginLeft:15,
        marginVertical:15,
        width: 300,
    },
  });
  