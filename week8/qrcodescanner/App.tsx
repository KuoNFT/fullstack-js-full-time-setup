import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Linking, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function App() {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  type BarCodeEven = {
    type: string;
    data: string;
  }

  const handleBarCodeScanned = ({ type, data }:BarCodeEven) => {
    setScanned(true);
    Alert.alert(
      "QR Code détecté",
      "Voulez-vous suivre le lien ?",
      [
        {
          text: "Annuler",
          onPress: () => setScanned(false),
          style: "cancel"
        },
        { 
          text: "Oui", 
          onPress: () => Linking.openURL(data) 
        }
      ]
    );
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
