import { Button, StyleSheet, Text, View ,Image, Pressable} from 'react-native'
import React from 'react'
import car from '../../assets/images/car.png'
import dash from '../../assets/images/TeslaInSide.jpg'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenNames from '../../routs/ScreenNames'
const LetsStart = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={car}/>
        <View>
            <Text style={styles.text1}> Try the Tesla App</Text>
            <Text style={styles.text2}> vehicle controls & trip planning</Text>
        </View>
        <View style={styles.conText}>
            <Image style={styles.imageText} source={car}/>
            <View style={{flexDirection:'column',justifyContent:'flex-start',}}>
            <Text numberOfLines={2} style={styles.texttt}>Remote Access </Text>
            <Text numberOfLines={2} style={styles.text3}>Monitor and control your vehicle anywhere there is cell service </Text>
            </View>
        </View>
        <View style={styles.conText}>
        <Image style={styles.imageText2} source={dash}/>
            <View style={{flexDirection:'column',justifyContent:'flex-start',}}>
            <Text numberOfLines={2} style={styles.texttt}>Remote Access </Text>
            <Text numberOfLines={2} style={styles.text3}>Monitor and control your vehicle anywhere there is cell service </Text>
            </View>
            
        </View>
        <View style={styles.conText}>
        <Image style={styles.imageText2} source={dash}/>
            <View style={{flexDirection:'column',justifyContent:'flex-start',}}>
            <Text numberOfLines={2} style={styles.texttt}>Remote Access </Text>
            <Text numberOfLines={2} style={styles.text3}>Monitor and control your vehicle anywhere there is cell service </Text>
            </View>
            
        </View>
        <View style={{height:200,width:'100%'}}>
        <Button
        
        title="Go to Details"
        onPress={() => navigation.navigate('Home')}
      />
        </View>
    </View>
  )
}
//Remote Access Monitor and control your vehicle anywhere there is cell service
export default LetsStart

const styles = StyleSheet.create({
    container:{
     flex:1,
     backgroundColor:'#161818',
     

    
    },
    image:{
     top:60,
    alignItems:'center',
   justifyContent:'center',
    height:300,
    width:'100%',
    resizeMode:'center'

    },
    text1:{ 
        marginTop:15,
        alignSelf:'center',
justifyContent:'center',
color:'#fff',
fontSize:20,
fontWeight:'900'

    },
    text2:{
        marginTop:15,
        alignSelf:'center',
        justifyContent:'center',
        color:'#fff',
        fontSize:15,
        fontWeight:'bold',
        padding:5
        


    },
    text3:{
        width:'70%',
       marginTop:3,
       color:'#939393',
       fontSize:12,
       fontWeight:'500',
       fontStyle:'normal',


   },
   texttt:{
    marginTop:15,
    height:20,
    justifyContent:'center',
    color:'#fff',
    fontSize:15,
    fontWeight:'bold',
    flexWrap:'wrap'

   },

    conText:{
      flexDirection:'row',
      width:'100%',
      height:100,
      
    },

    imageText:{
        marginTop:25,
        height:50,
        width:110,
        resizeMode:'center'


    },
    imageText2:{
        marginTop:25,
        height:50,
        width:110,
        resizeMode:'contain',


    }

    



})