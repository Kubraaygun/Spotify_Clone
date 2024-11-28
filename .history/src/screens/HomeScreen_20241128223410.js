import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Loader from '../components/Loader';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
const HomeScreen = () => {
  return (
    <LinearGradient colors={['#040306', '#131624']} style={{flex: 1}}>
      <ScrollView
        style={{marginTop: 50}}
        contentContainerStyle={{paddingBottom: 100}}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRms4SSvT_4IGE0kKkrS1oMdBLjREB9wJCNQA&s',
              }}
              style={styles.headerImage}
            />
            <Text style={styles.headerText}>Message</Text>
          </View>
          <MaterialCommunityIcons
            name="lightning-bolt-outline"
            color="white"
            size={24}
          />
        </View>
        {/* TabButtons */}
        <View style={styles.tabButtons}>
          <Pressable style={styles.tabButton}>
            <Text style={styles.tabButtonText}>Music</Text>
          </Pressable>

          <Pressable style={styles.tabButton}>
            <Text style={styles.tabButtonText}>Podcast & Shows</Text>
          </Pressable>
        </View>
        {/*  */}
        <View>
          <Pressable style={styles.likedSongs}>
            <LinearGradient colors={['#33006F', '#FFFFFF']}>
              <Pressable
                style={{
                  width: 55,
                  height: 55,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <AntDesign name="heart" color="white" size={24} />
              </Pressable>
            </LinearGradient>
            <Text style={styles.likedSongsText}>Liked Songs</Text>
          </Pressable>

          <Pressable style={styles.likedSongs}>
            <LinearGradient colors={['#33006F', '#FFFFFF']}>
              <Pressable
                style={{
                  width: 55,
                  height: 55,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Entypo name="moon" color="white" size={24} />
              </Pressable>
            </LinearGradient>
            <Text style={styles.likedSongsText}>Rock & Roll </Text>
          </Pressable>

          <Pressable style={styles.likedSongs}>
            <LinearGradient colors={['#33006F', '#FFFFFF']}>
              <Pressable
                style={{
                  width: 55,
                  height: 55,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <AntDesign name="star" color="white" size={24} />
              </Pressable>
            </LinearGradient>
            <Text style={styles.likedSongsText}>Caz</Text>
          </Pressable>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  headerImage: {
    width: 40,
    height: 40,
    padding: 10,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 10,
  },
  tabButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginVertical: 5,
    marginHorizontal: 12,
  },
  tabButton: {
    backgroundColor: '#282828',
    padding: 10,
    borderRadius: 30,
  },
  tabButtonText: {
    color: 'white',
    fontSize: 15,
  },
  likedSongs: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 8,
    backgroundColor: '#202020',
    overflow: 'hidden',
  },
  likedSongsText: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
