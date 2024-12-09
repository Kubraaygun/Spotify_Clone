import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {ProfileContext} from '../context/ProfileContext';

const ProfileScreen = () => {
  const {profileData, loading, error} = useContext(ProfileContext);

  const {name, image_url, followers_count, public_playlist} = profileData;
  return (
    <LinearGradient colors={['#040306', '#131624']} style={{flex: 1}}>
      <ScrollView style={{marginTop: 50}}>
        <View style={{padding: 15}}>
          <View style={styles.profileContainer}>
            <Image source={{uri: image_url}} style={styles.profileImage} />
          </View>

          <View>
            <Text style={styles.profileName}>{name}</Text>
            <Text style={styles.profileFollowers}>{followers_count}</Text>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  profileContainer: {},
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  profileName: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileFollowers: {
    color: 'gray',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
