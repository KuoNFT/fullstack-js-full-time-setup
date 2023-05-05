import { useEffect, useState } from 'react';
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addPlace, setMarkers } from '../reducers/user';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function MapScreen() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const markers = useSelector((state) => state.markers.value);

  const [currentPosition, setCurrentPosition] = useState(null);
  const [tempCoordinates, setTempCoordinates] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [newPlace, setNewPlace] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status === 'granted') {
        Location.watchPositionAsync({ distanceInterval: 10 },
          (location) => {
            setCurrentPosition(location.coords);
          });
      }
    })();
  }, []);

  useEffect(() => {
    dispatch(setMarkers(user.nickname));
  }, []);

  const handleLongPress = (e) => {
    setTempCoordinates(e.nativeEvent.coordinate);
    setModalVisible(true);
  };

  const handleNewPlace = async () => {
    try {
      const response = await fetch('http://192.168.1.124:3000/places', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nickname: user.nickname,
          name: newPlace,
          latitude: tempCoordinates.latitude,
          longitude: tempCoordinates.longitude,
        }),
      });
  
      const data = await response.json();
  
      if (data.result) {
        data.result && dispatch(addPlace({
          name: newPlace,
          latitude: tempCoordinates.latitude,
          longitude: tempCoordinates.longitude,
        }));
        dispatch(setMarkers(user.nickname));
      } else {
        console.error('Error saving the place.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  
    setModalVisible(false);
    setNewPlace('');
  };
  
  const handleClose = () => {
    setModalVisible(false);
    setNewPlace('');
  };

  const loadMarkers = async () => {
    try {
      const response = await fetch(`http://192.168.1.124:3000/places/${user.nickname}`);
      const data = await response.json();

      if (data.result) {
        console.log(data)
        dispatch(setMarkers(data.places));
      } else {
        console.error('Error loading markers.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    loadMarkers();
  }, []);
  
  const markerElements = markers
    ? markers
        .filter((data) => data.latitude !== undefined && data.longitude !== undefined)
        .map((data, i) => {
          return (
            <Marker
              key={i}
              coordinate={{ latitude: data.latitude, longitude: data.longitude }}
              title={data.name}
            />
          );
        })
    : [];


return (
  <View style={styles.container}>
  <Modal visible={modalVisible} animationType="fade" transparent>
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <TextInput placeholder="New place" onChangeText={(value) => setNewPlace(value)} value={newPlace} style={styles.input} />
        <TouchableOpacity onPress={() => handleNewPlace()} style={styles.button} activeOpacity={0.8}>
          <Text style={styles.textButton}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleClose()} style={styles.button} activeOpacity={0.8}>
          <Text style={styles.textButton}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>

  <MapView onLongPress={(e) => handleLongPress(e)} mapType="hybrid" style={styles.map}>
    {currentPosition && <Marker coordinate={currentPosition} title="Ma position" pinColor="#fecb2d" />}
    {markerElements}
  </MapView>
</View>
);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    width: 150,
    borderBottomColor: '#ec6e5b',
    borderBottomWidth: 1,
    fontSize: 16,
  },
  button: {
    width: 150,
    alignItems: 'center',
    marginTop: 20,
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
