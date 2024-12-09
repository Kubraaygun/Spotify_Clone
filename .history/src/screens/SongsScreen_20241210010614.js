import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
const SongsScreen = () => {
  return (
    <LinearGradient colors={['#614385', '#516395']} style={{flex: 1}}>
      <ScrollView style={{flex: 1, marginTop: 50}}>
        <View>
          <Pressable>
            <Ionicons name="arrow-back" size={24} color="white" />
          </Pressable>
          <Pressable>
            <AntDesign name="search1" size={24} color="white" />
          </Pressable>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default SongsScreen;

const styles = StyleSheet.create({});
