
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../FlixApp/nav/Componn/HomeScreen'
import ClimateScreen from './nav/Componn/Climate';
import DetailsScreen from './DetailsScreen';
import Controls from './nav/Componn/Controls';
import Location from './nav/Componn/Location';
import LetsStart from './nav/Componn/LetsStart';
const Stack = createNativeStackNavigator();



function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="letsStart">
        <Stack.Screen name="letsStart" component={LetsStart} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={ClimateScreen} />
        <Stack.Screen name="Control" component={Controls} />
        <Stack.Screen name="Location" component={Location} />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;