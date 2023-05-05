import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, SafeAreaView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function App() {
  const [placeName, setPlaceName] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const markersRef = useRef([]);

  const handlePress = () => {
    if (placeName && latitude && longitude) {
      const newMarker = {
        title: placeName,
        coordinate: {
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
        },
      };
	  console.log(newMarker)
      markersRef.current = [...markersRef.current, newMarker];
      setPlaceName('');
      setLatitude('');
      setLongitude('');
    }
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
        {markersRef.current.map((marker, index) => (
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
