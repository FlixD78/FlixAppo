import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const LockButton = ({ color, onPress }) => (
    <TouchableOpacity style={styles.lockButton} onPress={onPress}>
        <MaterialCommunityIcons name='lock' size={27} color={color ? '#FFF' : '#808080'} />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    lockButton: {
        marginTop: 300,
        alignSelf: 'center',
    },
});

export default LockButton;
