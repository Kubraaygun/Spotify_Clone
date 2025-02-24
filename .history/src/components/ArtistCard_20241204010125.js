import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ArtistCard = ({artist}) => {
  return (
    <TouchableOpacity>
      <View style={styles.artistContainer}>
        {/* <Image
          source={{uri: artist.data.visuals.avatarImage.sources[0].url}}
          style={styles.artistImage}
        /> */}
        <Text style={styles.artistName}>{artist.data.profile.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ArtistCard;

const styles = StyleSheet.create({
  artistContainer: {
    margin: 10,
    width: 100,
  },
  artistImage: {
    width: 100,
    height: 100,
  },
  artistName: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 5,
    textAlign: 'center',
  },
});
