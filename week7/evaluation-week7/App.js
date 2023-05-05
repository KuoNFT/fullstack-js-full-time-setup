import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, SafeAreaView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function App() {
  const [markers, setMarkers] = useState([]);

  const addMarker = () => {
    const name = nameRef.current?.value;
    const lat = Number(latRef.current?.value);
    const lng = Number(lngRef.current?.value);

    if (!name || isNaN(lat) || isNaN(lng)) {
      return;
    }

    setMarkers([...markers, { name, coordinate: { latitude: lat, longitude: lng } }]);
  };

  const nameRef = React.createRef();
  const latRef = React.createRef();
  const lngRef = React.createRef();

  return (
    <View>
      <SafeAreaView style={styles.inputSection}>
        <TextInput ref={nameRef} placeholder='Place Name' style={styles.input} />
        <TextInput ref={latRef} placeholder='Latitude' style={styles.input} />
        <TextInput ref={lngRef} placeholder='Longitude' style={styles.input} />
        <Pressable style={styles.button} onPress={addMarker}>
          <Text style={styles.buttonText}>Go</Text>
        </Pressable>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: 48.856614,
          longitude: 2.3522219,
          latitudeDelta: 5,
          longitudeDelta: 5,
        }}
        style={styles.map}>
        {markers.map((marker, index) => (
          <Marker key={index} coordinate={marker.coordinate} title={marker.name} />
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
