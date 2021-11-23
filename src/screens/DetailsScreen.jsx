import React from 'react';
import { ActivityIndicator, StyleSheet, View, Text, Image, ScrollView } from "react-native";

export default function DetailsScreen(props) {
  const { shortcut } = props.route.params;
  // console.log(shortcut);
  
  const shortcutJsx = shortcut.categories.map((s, key) => (
    <View key={key} style={styles.shortContainer}>
      <Text style={styles.textShort} key={s.id}>{s.name}</Text>
    </View>
    ));

  return (
    <ScrollView>
      <View style={styles.menu}>
          {/* Titre du raccourci */}
          <Text style={styles.shortTitle}>{shortcut.title}</Text>
          {/* Affichage du Logiciel */}
          <Text style={styles.buttonsSoft}> {shortcut.software.name} </Text>
          {/* Affichage de la categorie */}
          <Text style={styles.buttonsShort}> {shortcutJsx} </Text>

          {/* Raccourci Windows */}
          <View style={styles.osContainer}>
              <Text style={styles.osTitle}>Windows</Text>
              <Text style={styles.p}>{shortcut.windows}</Text>
          </View>
          
          {/* Raccourci Mac */}
          <View style={styles.osContainer}>
              <Text style={styles.osTitle}>Mac</Text>
              <Text style={styles.p}>{shortcut.macos}</Text>
          </View>

          {/* Raccourci Linux */}
          <View style={styles.osContainer}>
              <Text style={styles.osTitle}>Linux</Text>
              <Text style={styles.p}>{shortcut.linux}</Text>
          </View>

          {/* Image */}
          <View style={styles.contImg}>
            <Image style={styles.shortImg}
            source={shortcut.image 
              // image dans shortcut ? valeur si vrai : valeur si faux
              ? {uri: process.env.API_URL + shortcut.image.contentUrl,}
              : require("../../assets/noImage.jpg")
                }
            style={styles.shortImg}
            />
          </View>

          {/* Contexte */}
          <Text style={styles.h2}>Contexte :</Text>
          <Text style={styles.p}>{shortcut.context}</Text>

          {/* Description */}
          <Text style={styles.h2}>Description :</Text>
          <Text style={styles.p}>{shortcut.description}</Text>
      </View>
    </ScrollView>

  );
};


const styles = StyleSheet.create({
  menu: {
      marginTop: 20,
    },
  shortTitle: {
      textAlign: 'center',
      marginBottom: 20,
      fontWeight: "600",
      fontSize:18,
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
  buttonsShort: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap:'wrap',
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
  contImg:{
    alignItems:'center',
    justifyContent:'center',
    resizeMode:'contain',
  },
  shortImg:{
    height: 220,
    width:320,
    resizeMode:'contain',
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
  