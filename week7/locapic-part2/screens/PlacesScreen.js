import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';

export default function PlacesScreen() {
  const placesData = useSelector((state) => state.user.places);
  console.log('placesData is :'+ placesData)
  const nickname = useSelector((state) => state.user.nickname);
  const [newCity, setNewCity] = useState('');
  const dispatch = useDispatch();

  const handleAddPlace = async () => {
    if (newCity.trim() === '') return;

    const response = await fetch(
      `https://api-adresse.data.gouv.fr/search/?q=${newCity}`,
    );
    const data = await response.json();
    console.log(data)
    const firstResult = data.features[0];

    if (firstResult) {
      const { coordinates } = firstResult.geometry;
      const place = {
        name: newCity,
        latitude: coordinates[1],
        longitude: coordinates[0],
      };

      dispatch({ type: 'ADD_PLACE', payload: place });
      setNewCity('');
    } else {
      alert("Aucune ville trouvée, veuillez réessayer.");
    }
  };

  const handleDeletePlace = (placeName) => {
    dispatch({ type: 'DELETE_PLACE', payload: placeName });
  };

  const places = placesData && placesData.map((data, i) => {
    return (
      <View key={i} style={styles.card}>
        <View>
          <Text style={styles.name}>{data.name}</Text>
          <Text>LAT : {data.latitude} LON : {data.longitude}</Text>
        </View>
        <FontAwesome
          name="trash-o"
          size={25}
          color="#ec6e5b"
          onPress={() => handleDeletePlace(data.name)}
          />
        </View>
      )});

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{nickname}'s places</Text>

      <View style={styles.inputContainer}>
    <TextInput
      style={styles.input}
      placeholder="New city"
      value={newCity}
      onChangeText={setNewCity}
    />
    <TouchableOpacity
      onPress={handleAddPlace}
      style={styles.button}
      activeOpacity={0.8}
    >
      <Text style={styles.textButton}>Add</Text>
    </TouchableOpacity>
  </View>

  <ScrollView contentContainerStyle={styles.scrollView}>
    {places}
  </ScrollView>
</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 20,
  },
  scrollView: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    backgroundColor: '#ffffff',
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    backgroundColor: '#ffffff',
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
  },
  input: {
    width: '65%',
    marginTop: 6,
    borderBottomColor: '#ec6e5b',
    borderBottomWidth: 1,
    fontSize: 16,
  },
  button: {
    width: '30%',
    alignItems: 'center',
    paddingTop: 8,
    backgroundColor: '#ec6e5b',
    borderRadius: 10,
  },
  textButton: {
    color: '#ffffff',
    height: 24,
    fontWeight: '600',
    fontSize: 15,
  },
});
