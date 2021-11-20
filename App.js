import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import CategoryScreen from "./src/screens/CategoryScreen";
import SoftwareScreen from "./src/screens/SoftwareScreen";
import AjoutShortcutScreen from "./src/screens/ShortcutsScreen";
import DetailsScreen from "./src/screens/DetailsScreen";

const Stack = createNativeStackNavigator();

const headerNav = {
  headerStyle: {
    backgroundColor: "#114A8A",
  },
  headerTintColor: "white",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Accueil" component={HomeScreen} options={headerNav} />
        <Stack.Screen name="Rechercher par catégorie :" component={CategoryScreen} options={headerNav} />
        <Stack.Screen name="Rechercher par logiciel :" component={SoftwareScreen} options={headerNav} />
        <Stack.Screen name="Ajouter un raccourci :" component={AjoutShortcutScreen} options={headerNav} />
        <Stack.Screen name="Detail :" component={DetailsScreen} options={headerNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

