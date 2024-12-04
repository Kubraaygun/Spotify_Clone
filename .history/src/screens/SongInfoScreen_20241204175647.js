import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const SongInfoScreen = () => {
  const {album} = route.params;
  return (
    <View>
      <Text>SongInfoScreen</Text>
    </View>
  );
};

export default SongInfoScreen;

const styles = StyleSheet.create({});
