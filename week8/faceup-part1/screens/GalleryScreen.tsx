import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const photosData: string[] = [
  'https://static.lacapsule.academy/faceup/picture1.jpg',
  'https://static.lacapsule.academy/faceup/picture2.jpg',
  'https://static.lacapsule.academy/faceup/picture3.jpg',
  'https://static.lacapsule.academy/faceup/picture4.jpg',
];

const GalleryScreen: React.FC = () => {
  const renderItem = ({ item }: { item: string }) => (
    <View style={styles.imageContainer}>
      <Image source={{ uri: item }} style={styles.image} />
      <TouchableOpacity style={styles.deleteIcon}>
        <FontAwesomeIcon icon={faTimes} size={24} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>Gallery</Text>
      <FlatList
        data={photosData}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  row: {
    justifyContent: 'space-around',
  },
  imageContainer: {
    marginBottom: 10,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  deleteIcon: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 2,
  },
});

export default GalleryScreen;