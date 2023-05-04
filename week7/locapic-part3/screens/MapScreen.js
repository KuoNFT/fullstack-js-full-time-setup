import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Button, Alert, Modal } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { useSelector, useDispatch } from 'react-redux';
import { addPlace } from '../reducers/user';

export default function MapScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const places = useSelector((state) => state.user.value.places);
  const [modalVisible, setModalVisible] = useState(false);
  const [tempCoordinates, setTempCoordinates] = useState(null);
  const [poiName, setPoiName] = useState('');
  const dispatch = useDispatch();

  const handleLongPress = (event) => {
    setTempCoordinates(event.nativeEvent.coordinate);
    setModalVisible(true);
  };

  const placeMarkers = places.map((place) => (
    <Marker
      key={place.name}
      coordinate={{ latitude: place.latitude, longitude: place.longitude }}
      title={place.name}
    />
  ));

  const handleSubmit = (coordinates, name) => {
    if (name.trim() === '') {
      Alert.alert('Erreur', 'Veuillez entrer un nom pour le point d\'intérêt.');
      return;
    }

    const newPlace = {
      name,
      latitude: coordinates.latitude,
      longitude: coordinates.longitude,
    };

    dispatch(addPlace(newPlace));
    setPoiName('');
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      const watchPosition = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          distanceInterval: 10,
        },
        (newLocation) => {
          setLocation(newLocation);
        },
        (error) => console.log(error)
      );

      return () => {
        if (watchPosition) {
          watchPosition.remove();
        }
      };
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        mapType="hybrid"
        initialRegion={{
          latitude: 48.856614,
          longitude: 2.3522219,
          latitudeDelta: 10,
          longitudeDelta: 10,
        }}
        onLongPress={handleLongPress}
      >
        {location && (
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="Ma position"
            pinColor="#fecb2d"
          />
        )}
        {placeMarkers}
      </MapView>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalView}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="Nom du point d'intérêt"
              value={poiName}
              onChangeText={setPoiName}
            />
            <View style={styles.buttonContainer}>
              <Button
                title="Ajouter"
                color="#ec6e5b"
                onPress={() => {
                  handleSubmit(tempCoordinates, poiName);
                  setModalVisible(false);
                }}
              />
              <View style={{ width: 10 }} />
              <Button
                title="Annuler"
                color="#ec6e5b"
                onPress={() => {
              setModalVisible(false);
              setPoiName('');
            }}
          />
        </View>
      </View>
    </View>
  </Modal>
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
},
map: {
width: '100%',
height: '100%',
},
modalView: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: 'rgba(0, 0, 0, 0.4)',
},
modalContent: {
backgroundColor: 'white',
borderRadius: 20,
padding: 20,
alignItems: 'center',
width: '80%',
},
input: {
width: '100%',
borderColor: '#ccc',
borderWidth: 1,
borderRadius: 5,
padding: 5,
marginBottom: 20,
},
buttonContainer: {
flexDirection: 'row',
},
});