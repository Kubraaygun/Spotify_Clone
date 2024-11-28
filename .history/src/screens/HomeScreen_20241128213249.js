import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = () => {
  return (
    <LinearGradient
      colors={['#040306', '#131624']}
      style={{flex: 1}}></LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
