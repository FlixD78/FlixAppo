import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import climateImage from '../../../assets/images/climate.png';
import ControlButton from './ControlButton';
import TemperatureControl from './TemperatureControl';
import ColorControl from './ColorControl';
import { useNavigation } from '@react-navigation/native';

const ClimateScreen = () => {
  const navigation = useNavigation();
  
  const [isPowerOn, setPower] = useState(false);
  const [temperature, setTemperature] = useState(22);
  const [ventOpen, setVentOpen] = useState(false);
  const [colorStates, setColorStates] = useState({
    color1: false,
    color2: false,
    color3: false,
    color4: false,
    color5: false,
  });

  const toggleColor = (key) => {
    setColorStates((prevStates) => ({
      ...prevStates,
      [key]: !prevStates[key],
    }));
  };

  const toggleVent = () => {
    setVentOpen((prev) => !prev);
  };

  const togglePower = () => {
    setPower((prev) => !prev);
  };

  const increaseTemperature = () => {
    setTemperature((prev) => prev + 1);
  };

  const decreaseTemperature = () => {
    setTemperature((prev) => prev - 1);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={climateImage} style={styles.image} resizeMode="cover">
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Entypo name="chevron-left" size={24} color="white" />
        </TouchableOpacity >
          
        <View style={{
              alignItems: "center",
              justifyContent: "space-between",
              left: 100,
              height: 400,
              width: 200,
              top: 100,
              }}>
  <ColorControl colorStates={colorStates} onToggleColor={toggleColor} />
</View>


      </ImageBackground>

      <View style={styles.footer}>
        <Text style={styles.label}>Interior {temperature}°F - Exterior 66°F</Text>
        <View style={styles.controlsRow}>
          <ControlButton 
            iconName="power" 
            label={isPowerOn ? 'on' : 'off'} 
            onPress={togglePower} 
            color="white" 
          />
          <TemperatureControl 
            temperature={temperature} 
            onIncrease={increaseTemperature} 
            onDecrease={decreaseTemperature} 
          />
          <ControlButton 
            iconName="car-door" 
            label={ventOpen ? 'VentOpen' : 'Vent'} 
            onPress={toggleVent} 
            color="gray" 
          />
        </View>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161818',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 25,
    backgroundColor: '#2f3030',
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: '100%',
    height: '90%',
  },
  footer: {
    alignItems: 'center',
    padding: 12,
    marginBottom: 20,
    marginTop: 'auto',
  },
  label: {
    color: 'gray',
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 20,
  },
  controlsRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
});

export default ClimateScreen;
