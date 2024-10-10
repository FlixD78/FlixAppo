import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const Header = ({ onBackPress }) => (
    <View style={styles.header}>
        <TouchableOpacity onPress={onBackPress} style={styles.back}>
            <Entypo name="chevron-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.text}>Controls</Text>
    </View>
);

const styles = StyleSheet.create({
    header: {
        top: 100,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
    },
    back: {
        backgroundColor: '#2f3030',
        padding: 10,
        borderRadius: 5,
    },
});

export default Header;
