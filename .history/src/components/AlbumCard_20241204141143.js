import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const AlbumCard = ({album}) => {
  return (
    <TouchableOpacity>
      <Image source={{uri: album.coverArt}} />
      <Text></Text>
      <Text></Text>
    </TouchableOpacity>
  );
};

export default AlbumCard;

const styles = StyleSheet.create({});
