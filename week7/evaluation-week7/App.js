import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, SafeAreaView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function App() {
  const [markers, setMarkers] = useState([]);
  const titleInput = useRef();
  const latInput = useRef();
  const lonInput = useRef();

  const addMarker = (title, latitude, longitude) => {
    setMarkers([...markers, { title, latitude, longitude }]);
  };

  return (
    <View>
      <SafeAreaView style={styles.inputSection}>
        <TextInput
          ref={titleInput}
          placeholder='Place Name'
          style={styles.input}
        />
        <TextInput
          ref={latInput}
          placeholder='Latitude'
          style={styles.input}
        />
        <TextInput
          ref={lonInput}
          placeholder='Longitude'
          style={styles.input}
        />
        <Pressable
          style={styles.button}
          onPress={() => {
            addMarker(
              titleInput.current.value,
              parseFloat(latInput.current.value),
              parseFloat(lonInput.current.value)
            );
          }}
        >
          <Text style={styles.buttonText}>Go</Text>
        </Pressable>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: 5,
          longitude: 5,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}
        style={styles.map}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
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
