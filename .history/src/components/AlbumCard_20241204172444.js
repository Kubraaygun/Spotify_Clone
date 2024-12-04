import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const AlbumCard = ({album}) => {
  return (
    <TouchableOpacity style={styles.albumContainer}>
      <Image source={{uri: album.coverArt}} style={styles.albumImage} />
      <Text numberOfLines={1} style={styles.albumName}>
        {album.name}
      </Text>
      <Text style={styles.albumArtist}>{album.artist}</Text>
    </TouchableOpacity>
  );
};

export default AlbumCard;

const styles = StyleSheet.create({
  albumContainer: {
    width: 100,
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  albumImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  albumName: {
    color: 'white',
    marginTop: 7,
  },
  albumArtist: {
    color: 'gray',
    fontSize: 12,
  },
});
