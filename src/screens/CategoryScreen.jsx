import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
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
    <View key={s.id} style={styles.catContainer}>
      <Text style={styles.pickerTitle}>{s.title}</Text>
      <Text style={styles.pickerCat}>{s.software.name}</Text>
      <View style={styles.logContainer}>
        {s.categories.map((c) => (
          <Text style={styles.pickerLog} key={c.id}>{c.name}</Text>
        ))}
      </View>
    </View>
  ));

  return (
    <View style={styles.menu}>
      <ScrollView>
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
          <Picker.Item label="Choisir une catégorie" value="Ici l'affichage des raccourcis" />
          {categoriesJsx}
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
    height: "100%",
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
  catContainer: {
    backgroundColor: 'white',
    width: 400,
    paddingHorizontal:10,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: "#114A8A",
    borderRadius: 5,
  },
  logContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  pickerCat: {
    backgroundColor: 'lightblue',
    width: 180,
    borderRadius: 5,
    marginHorizontal: 5,
    padding: 5,
    fontSize: 16,
    fontWeight:500,
    textAlign: 'center',
  },
  pickerLog: {
    backgroundColor: 'lightyellow',
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
