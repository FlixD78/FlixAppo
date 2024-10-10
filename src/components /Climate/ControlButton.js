import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ControlButton = ({ iconName, label, onPress, color }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <MaterialCommunityIcons name={iconName} size={42} color={color} />
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  label: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 10,
  },
});

export default ControlButton;
