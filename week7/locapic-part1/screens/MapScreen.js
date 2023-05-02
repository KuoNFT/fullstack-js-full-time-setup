import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/map.jpg')} style={styles.mapImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  mapImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default MapScreen;
