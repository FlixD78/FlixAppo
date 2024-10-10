
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens /HomeScreen';
import ClimateScreen from '../screens /Climate';
import Controls from '../screens /Controls';
import Location from '../components /Location';
import LoginScreen from '../components /login /Login';
import SignupScreen from '../components /login /SignupScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="LogHome">
        <Stack.Screen name="LogHome" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={ClimateScreen} />
        <Stack.Screen name="Control" component={Controls} />
        <Stack.Screen name="Location" component={Location} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
