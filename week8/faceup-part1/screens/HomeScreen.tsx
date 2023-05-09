import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
  Image,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import userReducer from '../src/reducers/user';



const HomeScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const setEmailAction = (email: string) => {
    return {
      type: 'SET_EMAIL',
      payload: email,
    };
  };
  

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailValidation = () => {
    if (validateEmail(email)) {
      setErrorMessage('');
      dispatch(setEmailAction(email));
      navigation.navigate('TabNavigator', { screen: 'GalleryScreen' });
    } else {
      setErrorMessage('Invalid email address');
    }
  };
  

  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}
    >
      <Image source={require('../assets/camera.png')} style={styles.camera} />
      <View style={styles.loginContainer}>
        <Text>Welcome to HomeScreen</Text>
        <TextInput
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          style={styles.input}
        />
        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
        <Button title="Go to gallery" onPress={handleEmailValidation} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  loginContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default HomeScreen;
