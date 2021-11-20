import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet, Text, View, Image } from "react-native";

export default function HomeScreen(props) {
  const [categories, setCategories] = useState([]);
  const [software, setSoftwares] = useState([]);
  const [shortcuts, setShortcuts] = useState([]);
  useEffect(() => {
    console.log("fetch: " + process.env.API_URL + "categories");
    fetch(process.env.API_URL + "categories")
      .then((response) => response.json())
      .then((data) => setCategories(data["hydra:member"]))
      .catch((error) => console.log(error));
    console.log("fetch: " + process.env.API_URL + "software");
    fetch(process.env.API_URL + "software")
      .then((response) => response.json())
      .then((data) => setSoftwares(data["hydra:member"]))
      .catch((error) => console.log(error));
    console.log("fetch: " + process.env.API_URL + "shortcuts");
    fetch(process.env.API_URL + "shortcuts")
      .then((response) => response.json())
      .then((data) => setShortcuts(data["hydra:member"]))
      .catch((error) => console.log(error));
  }, []);
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/logo.png')}
      />
      <Text style={styles.mainText}>Rechercher par :</Text>
      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => props.navigation.navigate("Rechercher par catégorie :", { categories: categories })}
        >
          <Text style={styles.buttonText}>Catégorie</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => props.navigation.navigate("Rechercher par logiciel :", { software: software })}
        >
          <Text style={styles.buttonText}>Logiciel</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.mainText}>Ou bien :</Text>
      <TouchableOpacity
        style={styles.shortcutButton}
        onPress={() =>
          props.navigation.navigate("Ajouter un raccourci :", { categories: categories, software: software })
        }
      >
        <Text style={styles.shortcutText}>Ajouter un raccouci</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#DBE0DE",
  },
  logo:{
    height:80,
    borderRadius:40,
  },
  mainText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#114A8A",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#114A8A",
  },
  containerButton: {
    display: "flex",
    flexDirection: "row",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderColor: "#114A8A",
    borderWidth: 2,
    width: 160,
    height: 75,
    borderRadius: 50,
    marginHorizontal: 15,
  },
  shortcutButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#114A8A",
    width: 300,
    height: 100,
    borderRadius: 50,
  },
  shortcutText: {
    color: "white",
    fontSize: 22,
    backgroundColor: "#114A8A",
  },
});