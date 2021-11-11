import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryScreen from './src/screens/CategoryScreen';
import HomeScreen from "./src/screens/HomeScreen";
import SoftwareScreen from './src/screens/SoftwareScreen';
import ShortcutsScreen from './src/screens/ShortcutsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Accueil" component={HomeScreen} />
        <Stack.Screen name="Categorie" component={CategoryScreen} />
        <Stack.Screen name="Logiciel" component={SoftwareScreen} />
        <Stack.Screen name="Raccourci" component={ShortcutsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

