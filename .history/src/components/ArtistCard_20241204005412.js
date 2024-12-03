import {Image, StyleSheet, Image, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ArtistCard = ({artist}) => {
  return (
    <TouchableOpacity>
      <View>
        <Image source={{uri: artist.data.visuals.avatarImage.source[0].url}} />
      </View>
    </TouchableOpacity>
  );
};

export default ArtistCard;

const styles = StyleSheet.create({});
