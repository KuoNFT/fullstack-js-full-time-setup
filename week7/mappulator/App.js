import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import initialLocations from './data/locations.json';

const icons = {
  church: require('./assets/church.png'),
  mountain: require('./assets/mountain.png'),
  shopping: require('./assets/shop.png'),
  attraction: require('./assets/attraction.png'),
  monument: require('./assets/monument.png'),
  business: require('./assets/business.png'),
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
