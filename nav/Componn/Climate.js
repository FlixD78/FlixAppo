import { View, Text, Image, StyleSheet, Pressable,TouchableOpacity, ImageBackground } from 'react-native';
import climateImage from '../../assets/images/climate.png';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
const Stack = createNativeStackNavigator();

    
    const ClimateScreen = () => {
  const router = useNavigation('Home');
  const [toggle, setToggle] = useState(false);
  const[color,colorbutton ]=useState({ color1: false, color2: false ,color3: false,color4: false,color5: false,});

  const[vent,VentOpen ]=useState(false);
  const [num, setnum] = useState(22);

  const SwitchColor = (key) => {
    colorbutton((prevState) => ({
      ...prevState,
      [key]: !prevState[key]
    }));
  };

  if (color.color1==false) {
    console.log("turn on");
} else {
    console.log("It's not true");
}

  const SwitchVent = () => {
    VentOpen(!vent);
  };
  const toggleSwitch = () => {
    setToggle(!toggle);
  };

  const buttonPlus = () => {
      setnum(num + 1);
    };
  
    const buttonMenus = () => {
        setnum(num - 1);
    };
  
  return (
    <View style={styles.container}>
      <ImageBackground source={climateImage} style={styles.image} resizeMode="cover" >
        
      <TouchableOpacity onPress={() => router.goBack('Home')} style={styles.back}>
      <Entypo name="chevron-left" size={24} color="white" />
      </TouchableOpacity>

<View style={{
    // backgroundColor:"gray",
    marginTop:140,
    height:300,
   
}}>
<View style={styles.controlMazgan}
>
<TouchableOpacity style={styles.controlMazganButton}onPress={() =>  SwitchColor('color1')}>
      <Entypo name="air" size={24} color= {color.color1 ? 'white' : 'red'}  />
      </TouchableOpacity>

<TouchableOpacity style={styles.controlMazganButton} onPress={()=>SwitchColor('color2')}   >
      <Entypo name="air" size={24} color={color.color2 ? 'white' : 'red'}   />
      </TouchableOpacity>

      </View>
      <View style={styles.controlMazgan2}>
      <TouchableOpacity style={{      padding: 3,backgroundColor: '#2f3030', borderRadius: 5,}}onPress={()=>SwitchColor('color3')}   >

      <Entypo name="air" size={24} color={color.color3 ? 'white' : 'red'}   />
      </TouchableOpacity>
      <TouchableOpacity style={{      padding: 3,backgroundColor: '#2f3030', borderRadius: 5,}}onPress={()=>SwitchColor('color4')}   >

      <Entypo name="air" size={24} color={color.color4 ? 'white' : 'red'}   />
      </TouchableOpacity>
      
      <TouchableOpacity style={{      padding: 3,backgroundColor: '#2f3030', borderRadius: 5,}} onPress={()=>SwitchColor('color5')}   >
      <Entypo name="air" size={24} color={color.color5 ? 'white' : 'red'}   />
      </TouchableOpacity>

      </View>

</View>
      </ImageBackground>

      <View style={styles.footer}>
        <Text style={styles.label}>Interior {num}°F - Exterior 66°F</Text>

        <View style={styles.controlsRow}>
          <View style={styles.iconButtonContainer}>
            <TouchableOpacity onPress={()=>toggleSwitch()}>
            <MaterialCommunityIcons name="power" size={42} color="white" />
            </TouchableOpacity>
            <Text style={styles.iconButtonText}>{toggle ? 'on' : 'off'}</Text>
          </View>
          <View style={styles.temperatureContainer}>
        {/* كبسات زيادة و تنقيص */}

            <Entypo name="chevron-left" size={30} color="gray" onPress={()=>buttonMenus()} />

            <Text style={styles.temperatureText}>{num}°</Text>


            <Entypo name="chevron-right" size={30} color="gray" onPress={()=>buttonPlus()} />

          </View>

          <View style={styles.iconButtonContainer}>
          <TouchableOpacity  onPress={()=>SwitchVent()}    >
            <MaterialCommunityIcons name="car-door" size={42} color="gray" />
            
            <Text style={styles.iconButtonText}>{vent ? 'VentOpen' : 'Vent'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161818',
  },
  back: {
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
  temperatureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  temperatureText: {
    fontSize: 48,
    fontWeight: '300',
    color: 'white',
    marginHorizontal: 20,
  },
  iconButtonContainer: {
    alignItems: 'center',
    
  },
  iconButtonText: {
    color: 'white',
    fontSize:15 ,
    fontWeight: "600",
    marginTop: 10,
 },
  controlMazgan:{
    justifyContent:"space-between",
    flexDirection:"row",
    alignItems:"baseline",
               
    marginTop:60,
marginLeft:110,
marginRight:110
  }
  ,
  controlMazgan2:{
     // backgroundColor:"yellow",
     marginTop:16,
     height:300,
     justifyContent:"space-between",
     alignItems:"baseline",
     flexDirection:"row",
     padding:120
  },
  controlMazganButton:{
    padding: 3,
    backgroundColor: '#2f3030',
     borderRadius: 5,
  }
});

export default ClimateScreen;