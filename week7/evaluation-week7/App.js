import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, SafeAreaView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function App() {
  const [placeName, setPlaceName] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [markers, setMarkers] = useState([]);

  const handlePress = () => {
    if (placeName && latitude && longitude) {
      const newMarker = {
        title: placeName,
        coordinate: {
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
        },
      };
      setMarkers([...markers, newMarker]);
      setPlaceName('');
      setLatitude('');
      setLongitude('');
    }
  };

  const addTestMarkers = () => {
    const London = { lat: 51.507359, lon: -0.136439 };
    const Madrid = { lat: 40.416775, lon: -3.703790 };
    const Rome = { lat: 41.902783, lon: 12.496366 };

    setMarkers([
      ...markers,
      {
        title: 'London',
        coordinate: {
          latitude: London.lat,
          longitude: London.lon,
        },
      },
      {
        title: 'Madrid',
        coordinate: {
          latitude: Madrid.lat,
          longitude: Madrid.lon,
        },
      },
      {
        title: 'Rome',
        coordinate: {
          latitude: Rome.lat,
          longitude: Rome.lon,
        },
      },
    ]);
  };

  return (
    <View>
      <SafeAreaView style={styles.inputSection}>
        <TextInput
          placeholder='Place Name'
          style={styles.input}
          value={placeName}
          onChangeText={setPlaceName}
        />
        <TextInput
          placeholder='Latitude'
          style={styles.input}
          value={latitude}
          onChangeText={setLatitude}
          keyboardType='numeric'
        />
        <TextInput
          placeholder='Longitude'
          style={styles.input}
          value={longitude}
          onChangeText={setLongitude}
          keyboardType='numeric'
        />
        <Pressable style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Go</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={addTestMarkers}>
          <Text style={styles.buttonText}>Ajouter les villes de test</Text>
        </Pressable>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: 48.85,
          longitude: 2.35,
          latitudeDelta: 5,
          longitudeDelta: 5,
        }}
        style={styles.map}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.coordinate}
            title={marker.title}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '70%',
  },
  inputSection: {
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    width: '80%',
    borderColor: 'gray',
    paddingHorizontal: 20, 
    paddingVertical: 5,
    margin: 5,
    borderRadius: 10,
  },
  button: {
    marginTop: 5,
    paddingHorizontal: 12,
    paddingVertical: 3,
    borderRadius: 10,
    backgroundColor: '#16C172',
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
});