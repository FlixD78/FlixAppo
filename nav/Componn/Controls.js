import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import React, { useState } from 'react'
import TeslaC from '../../assets/images/tesla-model-y-glass-roof-mobile-app.png'
import { NavigationContainer, useNavigation } from '@react-navigation/native';


const Controls = () => {
    const router = useNavigation('Home');
    const [color, colorbutton] = useState({ color1: false, color2: false, color3: false, color4: false, color5: false,color6:false });

    const SwitchColor = (key) => {
        colorbutton((prevState) => ({
            ...prevState,
            [key]: !prevState[key]
        }));
    };




    return (
        <View style={styles.continer}>
            <View style={{ flexDirection: "row", }}>
                <TouchableOpacity onPress={() => router.goBack('Home')} style={styles.back}>
                    <Entypo name="chevron-left" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.text}>  Controls  </Text>
            </View>
            <ImageBackground source={TeslaC} style={styles.image} resizeMode="contain" >

                <TouchableOpacity style={{ marginTop: 300, alignSelf: 'center' }}  onPress={() => SwitchColor('color6')}  >
                    <MaterialCommunityIcons name='lock' size={27} color={color.color6 ? '#FFF' : '#808080'} />
                </TouchableOpacity>

                <View style={styles.contenerButton}  >
                    <TouchableOpacity style={styles.flashStyle} onPress={() => SwitchColor('color1')}  >
                        <MaterialCommunityIcons name='car-light-high' size={27} color={color.color1 ? "#fff" : "#808080"} />
                        
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => SwitchColor('color2')} style={styles.bepbepStyle} >
                        <MaterialCommunityIcons name="bugle" size={27} color={color.color2 ? "#fff" : "#808080"} />
                    </TouchableOpacity   >


                    <TouchableOpacity onPress={() => SwitchColor('color5')} style={styles.StartStyle}  >
                        <MaterialCommunityIcons name="remote" size={27} color={color.color5 ? "#fff" : "#808080"} />
                    </TouchableOpacity >


                    <TouchableOpacity onPress={() => SwitchColor('color4')} style={styles.ventStyle} >
                        <MaterialCommunityIcons name="car-door" size={27} color={color.color4 ? '#fff' : "#808080"} />
                    </TouchableOpacity   >
                </View>
            </ImageBackground>
            <View>
            </View>
        </View>
    )
}

export default Controls

const styles = StyleSheet.create({

    continer: {
        flex: 1,
        backgroundColor: '#161818',

    },
    image: {
        marginTop: 100,
        width: '100%',
        height: '80%',
    },
    button: {

    },
    text: {
        position: 'absolute',
        color: '#fff',
        top: 50,
        left: 25,
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginLeft: 115,
        fontSize: 20,
        fontWeight: 'bold'
    },
    back: {
        position: 'absolute',
        top: 50,
        left: 25,
        backgroundColor: '#2f3030',
        padding: 10,
        borderRadius: 5,

    },
    contenerButton: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        marginTop: 330
    },

    flashStyle: {
        padding: 10,
        borderRadius: 5,
        alignSelf: 'flex-start',
        backgroundColor: '#2f3030',
    },
    bepbepStyle: {
        padding: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignSelf: "center",
        backgroundColor: '#2f3030'

    },
    StartStyle: {
        padding: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: '#2f3030',
    },

    ventStyle: {
        padding: 10,
        borderRadius: 5,
        alignSelf: 'flex-end',
        backgroundColor: '#2f3030',
    }




})