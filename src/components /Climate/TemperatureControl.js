import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const TemperatureControl = ({ temperature, onIncrease, onDecrease }) => (
  <View style={styles.container}>
    <Entypo name="chevron-left" size={30} color="gray" onPress={onDecrease} />
    <Text style={styles.temperatureText}>{temperature}°</Text>
    <Entypo name="chevron-right" size={30} color="gray" onPress={onIncrease} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  temperatureText: {
    fontSize: 48,
    fontWeight: '300',
    color: 'white',
    marginHorizontal: 20,
  },
});

export default TemperatureControl;
