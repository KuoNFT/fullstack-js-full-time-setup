import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import haversine from 'haversine';
import { Dimensions } from 'react-native';


export default function ScreenMap() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [locationsWithDistances, setLocationsWithDistances] = useState([]);
  const icons = {
    church: require('../assets/church.png'),
    mountain: require('../assets/mountain.png'),
    shopping: require('../assets/shop.png'),
    attraction: require('../assets/attraction.png'),
    monument: require('../assets/monument.png'),
    business: require('../assets/business.png'),
  };
  

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('La permission d\'accéder à la position a été refusée');
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);

      const locationsData = require('../data/locations.json');
      const calculatedLocations = calculateDistances(currentLocation, locationsData);
      setLocationsWithDistances(calculatedLocations);
    })();
  }, []);

  function calculateDistances(userLocation, locations) {
    return locations.map(location => {
      const start = {
        latitude: userLocation.coords.latitude,
        longitude: userLocation.coords.longitude
      };

      const end = {
        latitude: location.coordinates.latitude,
        longitude: location.coordinates.longitude
      };

      const distance = haversine(start, end, { unit: 'km' });

      return {
        ...location,
        distance
      };
    });
  }

  return (
    <View style={{ flex: 1 }}>
      {location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {locationsWithDistances.map((location) => (
            <Marker
  key={location.id}
  coordinate={{
    latitude: location.coordinates.latitude,
    longitude: location.coordinates.longitude,
  }}
  title={location.name}
  description={`${location.distance.toFixed(2)} km`}
>
  <Image source={icons[location.type]} style={{ width: 32, height: 32 }} />
</Marker>
          ))}
        </MapView>
      )}
      {errorMsg && <Text>{errorMsg}</Text>}
    </View>
  );
}

const styles = StyleSheet.create(
    {
        map: {
            width: Dimensions.get('window').width,

            height: Dimensions.get('window').height 
        }
    }
)
