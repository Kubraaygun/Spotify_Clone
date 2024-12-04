import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const AlbumCard = ({album}) => {
  return (
    <TouchableOpacity style={styles.albumContainer}>
      <Image source={{uri: album.coverArt}} style={styles.albumImage} />
      <Text style={styles.albumName}>{album.name}</Text>
      <Text style={styles.albumArtist}>{album.artist}</Text>
    </TouchableOpacity>
  );
};

export default AlbumCard;

const styles = StyleSheet.create({
  albumContainer: {
    margin: 10,
    width: 100,
  },
  albumImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  albumName: {
    color: 'white',
    marginTop: 7,
  },
  albumArtist: {color: 'gray', fontSize: 12},
});
