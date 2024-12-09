import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
const SongsScreen = () => {
  return (
    <LinearGradient colors={['#614385', '#516395']} style={{flex: 1}}>
      <ScrollView style={{flex: 1, marginTop: 50}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Pressable style={{marginHorizontal: 10}}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </Pressable>

          <Pressable
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginHorizontal: 10,
              marginTop: 9,
            }}>
            <Pressable
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                height: 40,
                backgroundColor: '#422775',
                borderRadius: 8,
                padding: 8,
              }}>
              <AntDesign name="search1" size={24} color="white" />
              <TextInput
                placeholder="Find in search songs"
                placeholderTextColor={'white'}
                style={{
                  fontWeight: '500',
                  width: '85%',
                  color: 'white',
                }}
              />
            </Pressable>
          </Pressable>
        </View>

        <View style={{marginHorizontal: 10, marginVertical: 10}}>
          <Text style={{fontSize: 18, color: 'white'}}>Search Songs</Text>
          <Text>S</Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default SongsScreen;

const styles = StyleSheet.create({});
