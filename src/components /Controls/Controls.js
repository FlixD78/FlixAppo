import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TeslaC from '../../../assets/images/tesla-model-y-glass-roof-mobile-app.png';
import Header from './ Header';
import LockButton from './LockButton';
import ButtonContainer from './ ButtonContainer';
import Entypo from 'react-native-vector-icons/Entypo';

const Controls = () => {
    const router = useNavigation();
    const [color, setColor] = useState({
        color1: false,
        color2: false,
        color3: false,
        color4: false,
        color5: false,
        color6: false,
    });

    const switchColor = (key) => {
        setColor((prevState) => ({
            ...prevState,
            [key]: !prevState[key],
        }));
    };

    return (
        <View style={styles.container}>
            <View style={{ marginVertical: 40, marginHorizontal: 20 }}>
                <View style={styles.header}>
                    <TouchableHighlight onPress={() => router.goBack()} style={styles.back}>
                        <Entypo name="chevron-left" size={24} color="white" />
                    </TouchableHighlight>
                    <Text style={styles.text}>Controls</Text>
                </View>
            </View>
            <View style={styles.image1}>
                <ImageBackground source={TeslaC} style={styles.image} resizeMode="contain">
                    <View style={{
                        top: -130
                    }}>
                        <LockButton color={color.color6} onPress={() => switchColor('color6')} />
                    </View>
                    <View style={{
                        top: -130
                    }}>
                        <ButtonContainer switchColor={switchColor} color={color} />
                    </View>
                </ImageBackground>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161818',
    },
    image1: {
        width: '100%',
        height: '80%',
    },
    image: {
        marginTop: 100,
        width: '100%',
        height: '80%',
    },
    header: {
        top: 20,
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

export default Controls;
