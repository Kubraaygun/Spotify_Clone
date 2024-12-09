import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const ProfileScreen = () => {
  return (
    <LinearGradient colors={['#040306', '#131624']} style={{flex: 1}}>
      <ScrollView style={{marginTop: 50}}>
        <View style={{padding: 15}}>
          <View>
            <Image />
          </View>
        </View>
        <Text></Text>
        <Text></Text>
      </ScrollView>
    </LinearGradient>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
