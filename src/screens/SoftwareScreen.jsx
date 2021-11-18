import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function SoftwareScreen(props) {
  const { software } = props.route.params;  //Route pour aller des props à software

  const softwareJsx = software      //Renvoi les noms des logiciels dans un Picker Item
    .sort((c1, c2) => c1.name.localeCompare(c2.name))  //Trie des noms des logiciels 
    .map((s) => <Picker.Item key={s.id} label={s.name} value={s.id} />); 

  const [logiciel, setSoftware] = useState([]);  //Hook pour éviter d'écrire une classe
  const [shortcut, setShortcut] = useState([]);

  const shortcutJsx = shortcut.map((s) => (
    <TouchableOpacity
    onPress={() => props.navigation.navigate("Detail :", { shortcut: s })}
    > 
      <View key={s.id} style={styles.resultContainer}>
        <Text style={styles.resultTitle}>{s.title}</Text>
        <Text style={styles.resultSoft}>{s.software.name}</Text>
        <View style={styles.catContainer}>
          {s.categories.map((c) => (
            <Text style={styles.resultCat} key={c.id}>{c.name}</Text>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  ));

  return (
    <View style={styles.menu}>
      <ScrollView>
        <Picker
          selectedValue={logiciel}
          onValueChange={function (itemValue, itemIndex) {
            fetch(process.env.API_URL + "shortcuts?categories.id=" + itemValue)
              .then((response) => response.json())
              .then((data) => setShortcut(data["hydra:member"]))
              .catch((error) => console.log(error));
            setSoftware(itemValue);
          }}
          mode="dropdown"
          style={styles.picker}
        >
          <Picker.Item label="Choisir un logiciel" value="Ici l'affichage des raccourcis" />
          {softwareJsx}
        </Picker>
        <View>
            {shortcutJsx} 
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    alignItems: "center",
    marginTop: 20,
  },
  picker: {
    fontSize: 16,
    marginVertical: 30,
    width: 400,
    padding: 15,
    borderWidth: 2,
    borderColor: "#114A8A",
  },
  resultContainer: {
    backgroundColor: 'white',
    width: 400,
    paddingHorizontal:10,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: "#114A8A",
    borderRadius: 5,
  },
  catContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  resultSoft: {
    backgroundColor: '#186BC9',
    color: 'white',
    borderRadius: 5,
    marginHorizontal: 5,
    padding: 5,
    fontSize: 16,
    fontWeight:500,
    textAlign: 'center',
  },
  resultCat: {
    backgroundColor: '#6AAFFD',
    color: 'white',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 5,
    fontSize: 16,
    fontWeight:500,
    textAlign: 'center',
  },
  resultTitle: {
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 600,
    fontSize:18,
  },
});