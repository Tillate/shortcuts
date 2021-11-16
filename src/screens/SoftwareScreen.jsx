import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function SoftwareScreen(props) {
  const { software } = props.route.params;

  const softwareJsx = software
    .sort((c1, c2) => c1.name.localeCompare(c2.name))
    .map((s) => <Picker.Item key={s.id} label={s.name} value={s.id} />);

  const [logiciel, setSoftware] = useState([]);
  const [shortcut, setShortcut] = useState([]);
  console.log(software);

  const shortcutJsx = shortcut.map((s) => (
    <View key={s.id}>
      <Text>{s.title}</Text>
      <Text>{s.software.name}</Text>
      <View>
        {s.categories.map((c) => (
          <Text key={c.id}>{c.name}</Text>
        ))}
      </View>
    </View>
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
        <View style={styles.catContainer}>
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
    width: 300,
    padding: 15,
    borderWidth: 2,
    borderColor: "#114A8A",
  },
  catContainer: {
    backgroundColor: 'white',
    width: 300,
    paddingHorizontal:10,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: "#114A8A",
    borderRadius: 5,
  }
});