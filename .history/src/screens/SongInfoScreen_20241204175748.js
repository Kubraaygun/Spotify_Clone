import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const SongInfoScreen = () => {
  // HomeScreenden gonderilen veriyi useRoute ile aldik
  const {album} = route.params;
  //Gelen verileri parcalayarak aldik

  const {coverArt, artist, name, year} = album;
  return (
    <View>
      <Text>SongInfoScreen</Text>
    </View>
  );
};

export default SongInfoScreen;

const styles = StyleSheet.create({});
