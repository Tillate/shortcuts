import React, { useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import ShortcutsDetail from "../components/ShortcutsDetail";

export default function CategoryScreen(props) {
  // Récupération du paramètre envoyé depuis HomeScreen
  const { categories } = props.route.params;
  // console.log(categories);

  // On trie les name dans categories puis on créer un nouveau tableau avec map
  const categoriesJsx = categories
    .sort((c1, c2) => c1.name.localeCompare(c2.name))
    .map((s) => <Picker.Item key={s.id} label={s.name} value={s.id} />); 

  // Hook pour modifier le state local des composants
  const [category, setCategory] = useState([]);
  const [shortcut, setShortcut] = useState([]);
  const [loading, setLoading] = useState(false);


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
              setLoading(true)
              setShortcut([])
              fetch(process.env.API_URL + "shortcuts?categories.id=" + itemValue)
                .then((response) => response.json())
                .then((data) => {
                  setShortcut(data["hydra:member"])
                  setLoading(false)
                })
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
          {loading ? <ActivityIndicator /> : null}
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
