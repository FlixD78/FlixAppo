import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ControlButton = ({ icon, color, onPress }) => (
    <TouchableOpacity style={styles.controlButton} onPress={onPress}>
        <MaterialCommunityIcons name={icon} size={27} color={color ? "#fff" : "#808080"} />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    controlButton: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#2f3030',
    },
});

export default ControlButton;
