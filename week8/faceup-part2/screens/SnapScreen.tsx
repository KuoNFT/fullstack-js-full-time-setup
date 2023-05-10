import React, { useState, useEffect, useRef } from 'react';  // Ajouter useRef
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';  // Importer useDispatch
import { updatePhotos } from '../reducers/user';  // Importer updatePhotos

export default function SnapScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);

  const cameraRef: any = useRef(null);  // Ajouter une référence à la caméra
  const dispatch = useDispatch();  // Ajouter useDispatch

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {  // Ajouter la fonction pour prendre la photo
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync({quality: 0.5});
      dispatch(updatePhotos(photo?.uri));
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} flashMode={flash} ref={cameraRef}>
        <View style={styles.buttonContainer}>
        
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <FontAwesome name="rotate-right" size={36} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
          testID="FontAwesomeIcon-circle-thin"
          style={styles.button}
          onPress={takePicture}>
          <FontAwesome name="circle-thin" size={36} color="white" />
        </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setFlash(
                flash === Camera.Constants.FlashMode.off
                  ? Camera.Constants.FlashMode.on
                  : Camera.Constants.FlashMode.off
              );
            }}>
            <FontAwesome name="flash" size={36} color="white" />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'space-between',
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
});
