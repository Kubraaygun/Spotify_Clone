import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const ProfileScreen = () => {
  return (
    <LinearGradient colors={['#040306', '#131624']}>
      <ScrollView></ScrollView>
    </LinearGradient>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
