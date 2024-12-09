import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
const SongsScreen = () => {
  return (
    <LinearGradient colors={['#614385', '#516395']} style={{flex: 1}}>
      <ScrollView style={{flex: 1, marginTop: 50}}>
        <View>
          <Pressable></Pressable>
          <Pressable></Pressable>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default SongsScreen;

const styles = StyleSheet.create({});
