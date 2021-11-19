import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function CategoryScreen(props) {
  const { categories } = props.route.params;

  const categoriesJsx = categories
    .sort((c1, c2) => c1.name.localeCompare(c2.name))
    .map((s) => <Picker.Item key={s.id} label={s.name} value={s.id} />); 

  const [category, setCategory] = useState([]);
  const [shortcut, setShortcut] = useState([]);
  console.log(categories);

  const shortcutJsx = shortcut.map((s) => (
    <TouchableOpacity
    onPress={() => props.navigation.navigate("Detail :", { shortcut: s })}
    style={styles.resultContainer}
    > 
      <View key={s.id}>
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
    justifyContent:'center'
  },
  
  picker: {
    fontSize: 16,
    width: '90%',
    paddingHorizontal: 15,
    borderWidth: 2,
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
    borderRadius: 10,
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
    borderRadius: 15,
    marginHorizontal: 5,
    padding: 5,
    fontSize: 16,
    fontWeight:"500",
    textAlign: 'center',
  },
  resultCat: {
    backgroundColor: '#6AAFFD',
    color: 'white',
    borderRadius: 15,
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
