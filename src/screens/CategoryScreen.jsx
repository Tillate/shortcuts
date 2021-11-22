import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import ShortcutsDetail from "../components/ShortcutsDetail";

export default function CategoryScreen(props) {
  // Récupération du paramètre inclu dans HomeScreen
  const { categories } = props.route.params;

  // On trie les name dans categories puis on créer un nouveau tableau avec map
  const categoriesJsx = categories
    .sort((c1, c2) => c1.name.localeCompare(c2.name))
    .map((s) => <Picker.Item key={s.id} label={s.name} value={s.id} />); 

    // console.log(categories);

  // Hook pour modifier le state local des composants
  const [category, setCategory] = useState([]);
  const [shortcut, setShortcut] = useState([]);

  // Affiche les differentes card lors de la selection de la categorie dans le picker
  const shortcutJsx = shortcut.map((s, key) => (
  <ShortcutsDetail key={s.id} shortcut={s} onPress={() => 
    props.navigation.navigate("Detail :", { shortcut: s })}
  />
  ));

  return (
    <ScrollView>
      <View style={styles.menu}>
          <Picker
            selectedValue={category}
            onValueChange={function (itemValue, itemIndex) {
              fetch(process.env.API_URL + "shortcuts?categories.id=" + itemValue)
                .then((response) => response.json())
                .then((data) => setShortcut(data["hydra:member"]))
                .catch((error) => console.log(error));
              setCategory(itemValue);
            }}
            mode="dropdown"
            style={styles.picker}
            >
            <Picker.Item label="Choisir une catégorie" value="Affichage des catégories" />
            {categoriesJsx}
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
    justifyContent:'center',
  },
  picker: {
    fontSize: 16,
    width: '90%',
    padding: 10,
    // borderWidth: 2,
    borderColor: "#114A8A",
    marginBottom:20,
    borderRadius:5,

  },
  resultContainer: {
    backgroundColor: 'white',
    width: '90%',
    paddingHorizontal:10,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: "#114A8A",
    borderRadius: 5,
    marginBottom:10,
  },
  catContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap:'wrap',
  },
  resultSoft: {
    backgroundColor: '#186BC9',
    color: 'white',
    borderRadius: 5,
    marginHorizontal: 5,
    padding: 5,
    fontSize: 16,
    fontWeight:"500",
    textAlign: 'center',
  },
  resultCat: {
    backgroundColor: '#6AAFFD',
    color: 'white',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    marginHorizontal: 5,
    fontSize: 16,
    fontWeight:"500",
    textAlign: 'center',
  },
  resultTitle: {
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: "600",
    fontSize:18,
  },
});
