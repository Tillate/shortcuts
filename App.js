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
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="Software" component={SoftwareScreen} />
        <Stack.Screen name="Shortcuts" component={ShortcutsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

