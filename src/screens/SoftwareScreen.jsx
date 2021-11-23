import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import ShortcutsDetail from "../components/ShortcutsDetail";


export default function SoftwareScreen(props) {
  // Récupération du paramètre envoyé depuis HomeScreen
  const { software } = props.route.params;
  // console.log(software);

  // On trie les name dans categories puis on créer un nouveau tableau avec map
  const softwareJsx = software
    .sort((c1, c2) => c1.name.localeCompare(c2.name))  
    .map((s) => <Picker.Item key={s.id} label={s.name} value={s.id} />); 

  // Hook pour modifier le state local des composants
  const [softwares, setSoftwares] = useState([]);
  const [shortcut, setShortcut] = useState([]);

  // Affiche les differentes card lors de la selection de la categorie dans le picker
  const shortcutJsx = shortcut.map((s, key) => (
  <ShortcutsDetail key={s.id} shortcut={s} onPress={() => 
    props.navigation.navigate("Detail :", { shortcut: s })}/>));

  return (
    <ScrollView>
      <View style={styles.menu}>
          <Picker
            selectedValue={softwares}
            onValueChange={function (itemValue, itemIndex) {
              fetch(process.env.API_URL + "shortcuts?software.id=" + itemValue)
                .then((response) => response.json())
                .then((data) => setShortcut(data["hydra:member"]))
                .catch((error) => console.log(error));
              setSoftwares(itemValue);
            }}
            mode="dropdown"
            style={styles.picker}
          >
            <Picker.Item label="Choisir un logiciel" value="Ici l'affichage des raccourcis" />
            {softwareJsx}
          </Picker>
          {shortcutJsx}    
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  menu: {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    marginTop: 20,
    justifyContent:'center'

  },
  picker: {
    fontSize: 16,
    width: '90%',
    padding: 10,
    // borderWidth: 2,
    borderColor: "#114A8A",
    marginBottom:10,
    borderRadius:5,
  },
});