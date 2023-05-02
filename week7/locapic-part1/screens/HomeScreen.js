import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [nickname, setNickname] = useState('');

  const goToMap = () => {
    navigation.navigate('TabNavigator', { screen: 'Map' });
  };

  return (
    <ImageBackground
      source={require('../assets/home-image.jpg')}
      style={styles.backgroundImage}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nickname"
            onChangeText={setNickname}
            value={nickname}
          />
          <TouchableOpacity style={styles.button} onPress={goToMap}>
            <Text style={styles.buttonText}>Go to map</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  form: {
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ec6e5b',
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
