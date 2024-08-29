// // LoginScreen.js

// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';
// import { fetchApi } from '../Api/api'; // Adjust path as per your project structure
// import car from '../../assets/images/car.png';

// const LoginScreen = ({ navigation }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     try {
//       const response = await fetchApi('/api/users/login', 'POST', {
//         username,
//         password,
//       });

//       if (response && response.message === 'Login successful!') {
//         navigation.navigate('Home');
//       } else {
//         Alert.alert('Error', 'Incorrect username or password. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error logging in:', error.message);
//       Alert.alert('Error', 'Login failed. Please try again later.');
//     }
//   };

//   const x ={
//     a:()=>require('../../assets/images/car.png')
//   }

//   return (
//     <View style={styles.container}>
      
//       <View style={styles.imageC}>
//         <Image style={styles.image} source={x.a()} /> 
//       </View>

//       <Text style={styles.label}>Username</Text>
//       <TextInput
//         style={styles.input}
//         value={username}
//         onChangeText={setUsername}
//         placeholder="Enter your username"
//         autoCapitalize="none" // Ensure username input does not auto-capitalize
//       />
//       <Text style={styles.label}>Password</Text>
//       <TextInput
//         style={styles.input}
//         value={password}
//         onChangeText={setPassword}
//         placeholder="Enter your password"
//         secureTextEntry
//       />

//       <Button title="Login" onPress={handleLogin} />
//       <Text>test</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     backgroundColor: '#272626',
//   },
//   label: {
//     alignSelf: 'flex-start',
//     marginBottom: 5,
//     color: '#fff',
//   },
//   input: {
//     height: 40,
//     width: '100%',
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 20,
//     paddingHorizontal: 10,
//     borderRadius: 10,
//     color: '#fff',
//   },
//   image: {
//     // top: 35,
//     // alignItems: 'center',
//     // justifyContent: 'center',
//     height: 120,
//     width: 200,
//   },
//   imageC: {
//     // top: 35,
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 300,
//     width: 300,
//     borderWidth:5
//     // resizeMode: 'center',
//   },
// });

// export default LoginScreen;

// LoginScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { fetchApi } from '../Api/api'; // Adjust path as per your project structure
import car from '../../assets/images/car.png';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetchApi('/api/users/login', 'POST', {
        username,
        password,
      });

      if (response && response.message === 'Login successful!') {
        navigation.navigate('Home');
      } else {
        Alert.alert('Error', 'Incorrect username or password. Please try again.');
      }
    } catch (error) {
      console.error('Error logging in:', error.message);
      Alert.alert('Error', 'Login failed. Please try again later.');
    }
  };

  const x = {
    a: () => require('../../assets/images/car.png')
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.imageC}>
        <Image style={styles.image} source={x.a()} />
      </View>

      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Enter your username"
        autoCapitalize="none" // Ensure username input does not auto-capitalize
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
      />

      <Button title="Login" onPress={handleLogin} />
      <Text>test</Text>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#272626',
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 5,
    color: '#fff',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: '#fff',
  },
  image: {
    height: 120,
    width: 300,
  },
  imageC: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
  },
});

export default LoginScreen;

