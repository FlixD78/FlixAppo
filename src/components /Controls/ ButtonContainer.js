import React from 'react';
import { View, StyleSheet } from 'react-native';
import ControlButton from './ControlButton';

const ButtonContainer = ({ switchColor, color }) => (
    <View style={styles.containerButton}>
        <ControlButton icon='car-light-high' color={color.color1} onPress={() => switchColor('color1')} />
        <ControlButton icon='bugle' color={color.color2} onPress={() => switchColor('color2')} />
        <ControlButton icon='remote' color={color.color5} onPress={() => switchColor('color5')} />
        <ControlButton icon='car-door' color={color.color4} onPress={() => switchColor('color4')} />
    </View>
);

const styles = StyleSheet.create({
    containerButton: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        marginTop: 330,
    },
});

export default ButtonContainer;
