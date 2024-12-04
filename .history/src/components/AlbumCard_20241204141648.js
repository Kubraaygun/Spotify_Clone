import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const AlbumCard = ({album}) => {
  return (
    <TouchableOpacity>
      <Image source={{uri: album.coverArt}} style={styles.albumImage} />
      <Text></Text>
      <Text></Text>
    </TouchableOpacity>
  );
};

export default AlbumCard;

const styles = StyleSheet.create({
  albumImage: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});
