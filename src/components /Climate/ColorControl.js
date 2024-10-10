
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const ColorControl = ({ colorStates, onToggleColor }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        {Object.keys(colorStates).slice(0, 2).map((key) => (
          <TouchableOpacity 
            key={key} 
            style={styles.colorButton} 
            onPress={() => onToggleColor(key)}
          >
            <Entypo name="air" size={24} color={colorStates[key] ? 'white' : 'red'} />
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row2}>
        {Object.keys(colorStates).slice(2).map((key) => (
          <TouchableOpacity 
            key={key} 
            style={styles.colorButton} 
            onPress={() => onToggleColor(key)}
          >
            <Entypo name="air" size={24} color={colorStates[key] ? 'white' : 'red'} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 60,
  },
  row1: {
    alignItems:'center',
    flexDirection: 'row',
    alignContent:'space-between',
    top:40,
    rowGap:60,
    marginRight:28,
    marginHorizontal:22,
    justifyContent:"space-between",
    width: '88%', // لتكون الأزرار في الصف تمتد بالكامل
  },
  row2: {
    flexDirection: 'row',
    top:163,
    left:-4,
    justifyContent: "space-between",
    width: '80%', // لتكون الأزرار في الصف تمتد بالكامل
  },
  colorButton: {
    padding: 7,
    backgroundColor: '#2f3030',
    borderRadius: 5,
  },
});

export default ColorControl;


// controlMazgan:{
//     justifyContent:"space-between",
//     flexDirection:"row",
//     alignItems:"baseline",
               
//     marginTop:60,
//   marginLeft:110,
//   marginRight:110
//   }
//   ,
//   controlMazgan2:{
//      // backgroundColor:"yellow",
//      marginTop:16,
//      height:300,
//      justifyContent:"space-between",
//      alignItems:"baseline",
//      flexDirection:"row",
//      padding:120
//   },
//   controlMazganButton:{
//     padding: 3,
//     backgroundColor: '#2f3030',
//      borderRadius: 5,
//   }
//   });
  