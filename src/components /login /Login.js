import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { fetchApi } from '../../../nav/Api/api'; 
import car from '../../../assets/images/car.png';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
const router=useNavigation()
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

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={car} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Enter your username"
          autoCapitalize="none"
          placeholderTextColor="#bbb"
        />
        
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry
          placeholderTextColor="#bbb"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={()=>router.navigate('SignupScreen')} style={styles.forgotPassword}>
        <Text style={styles.forgotText}>Signup?</Text>
      </TouchableOpacity>
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
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    flex: 1, // Allow the image to take more space
  },
  image: {
    height: 250, // Increase the height for better visibility
    width: '100%', // Full width for maximum visibility
    resizeMode: 'contain',
    position: 'absolute', // Position it absolutely
    top: 200, // Adjust positioning to bring it into view
  },
  inputContainer: {
    width: '100%', // Full width for inputs
    top:-100,
    borderRadius: 10,
    padding: 20,
    backgroundColor: '#444',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 5,
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  input: {
    height: 50,
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: '#555',
    color: '#fff',
    fontSize: 16,
  },
  button: {
    top:-70,
    height: 50,
    width: '100%',
    backgroundColor: '#1E90FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 2,
  },
  buttonText: {
    
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 5,
    top:-60,
  },
  forgotText: {
    color: '#bbb',
    fontSize: 14,
  },
});

export default LoginScreen;
