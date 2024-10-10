import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Pressable, Modal, Button } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import car from '../../assets/images/car.png'
import React, { useState } from 'react'
import menuOptions from '../../assets/menuOptions'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();



// ... other code from the previous section

const RenderCntrols = () => {
  const [toggle, setToggle] = useState(false);

  const [color , setcolor]=useState(false);

  const [colors, colorbutton] = useState({ color1: false, color2: false, color3: false, color4: false });

  const SwitchColor = (key) => {
    colorbutton((prevState) => ({
      ...prevState,
      [key]: !prevState[key]
    }));
console.log(key)


  };ggleSwitch2=()=>{
   setcolor(!color);
  }
  const toggleSwitch = () => {
    setToggle(!toggle);


  };

  const controls = [
    {
      iconType: Entypo,
      name: toggle ? 'lock' : 'lock-open',
      color:  toggle ? 'red' : 'gray',  // Set dynamically if needed
      work: () => toggleSwitch() // Calls a function to toggle something
    },
    {
      iconType: MaterialCommunityIcons,
      name: "fan",
      color: colors.color2 ? 'white' : 'gray',  // Set color based on a condition
      work: () =>  SwitchColor('color2')
      
    },
    {
      iconType: FontAwesome5,
      name: "bolt",
      color: colors.color3 ? '#43dcf7e3' :'gray' ,  // Set dynamically if needed
      work: () => { 
        SwitchColor('color3')
        

      }
    },
    { 
      iconType: Ionicons,
      name: "car-sport-sharp",
      color: colors.color4?'white':'gray', 
      work: () => {
        SwitchColor('color4')

      }
    }
  ];
  return (
    <View style={styles.controls}>
      {/* map to add icon ماب تعمل على اضافة ايكون بشكل مرتب */}
      {
        controls.map((Control, i) => (
          <TouchableOpacity key={i} style={{ flex: 1, alignItems: 'center' }}>
            <Control.iconType onPress={Control.work} name={Control.name} size={26} color={Control.color}/>
          </TouchableOpacity>
        ))
      }
    </View>
  )

}


const FlixApp = () => {

  const router = useNavigation('Details');
  const Asas = onPress = () => router.navigate('Details')

  const navigateToScreen = (screenName) => {
    router.navigate(screenName)
    // screenName?.()
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>



          <Text style={styles.title}>Flix Model s </Text>
          <Text style={styles.subtittle}> this is the start</Text>
        </View>

        <FontAwesome name="user-circle" size={30} color="gray" />
      </View>
      <View>
        <Image source={car} style={styles.image} resizeMode="contain" />
      </View>

      <RenderCntrols />
     
      <FlatList

        data={menuOptions}
        renderItem={({ item }) => (

          <TouchableOpacity style={styles.optionRow} onPress={() => navigateToScreen(item.screenName)}>

            <MaterialCommunityIcons name={item.iconName}
              size={26} color='gray' />
            {/* Text اضفة نص */}
            <Text style={styles.optionText}>{item.name}</Text>

            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="gray"
              style={{ marginLeft: 'auto' }}

            />

          </TouchableOpacity>


        )} />
    </View>

  )
}


export default FlixApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#161818'
  },
  header: {
    marginTop: 50,
    flexDirection: 'row'
    , justifyContent: 'space-between'
  },
  title: {
    fontSize: 24,
    color: '#eee'
    , fontWeight: 'bold',
    marginBottom: 8,
  }, subtittle: {
    color: 'gray',
    fontWeight: "500"
  },
  image: {
    width: '100%'
    , height: 300


  }, controls: {
    flexDirection: "row",
    justifyContent: 'space-around',
    marginBottom: 20

  }, optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20
  },
  optionText: {
    color: '#eee',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  modalView: {
    alignItems:"flex-start",
    flexDirection:'column',
  marginTop:420,
    height:400,
    width:'%100',
    margin: 20,
    backgroundColor: '#272626',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#272626',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    height:30,
    width:30,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
alignItems:'flex-start',    
marginEnd:272,
    marginBottom:20,
    height:27,
    backgroundColor:'#161818',
    
    
    
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },centeredView:{
   
flex:1,


  }


})