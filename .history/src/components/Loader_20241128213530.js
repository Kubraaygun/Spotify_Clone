import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Loader = () => {
  return (
    <View>
      <ActivityIndicator style={'large'} color={'#1DB954'} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({});
