import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const placesData = [
  { name: 'Paris', latitude: 48.859, longitude: 2.347 },
  { name: 'Lyon', latitude: 45.758, longitude: 4.835 },
  { name: 'Marseille', latitude: 43.282, longitude: 5.405 },
];

const PlacesScreen = () => {
  const [newCity, setNewCity] = useState('');

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text>{item.name}</Text>
        <FontAwesome name="trash-o" size={24} color="black" />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.addCitySection}>
        <TextInput
          style={styles.input}
          placeholder="New city"
          onChangeText={setNewCity}
          value={newCity}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={placesData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  addCitySection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#ec6e5b',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default PlacesScreen;
