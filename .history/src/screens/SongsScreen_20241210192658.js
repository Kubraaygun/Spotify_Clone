import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import Entypo from 'react-native-vector-icons/Entypo';
const SongsScreen = () => {
  const [searchText, setSearchText] = useState('Türkiye de popüler müzikler');
  const [searchedTracks, setSearchTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState(null);

  const handleSearch = async () => {
    const options = {
      method: 'GET',
      url: 'https://shazam.p.rapidapi.com/search',
      params: {
        term: searchText,
        locale: 'tr-TR',
        offset: '0',
        limit: '5',
      },
      headers: {
        'x-rapidapi-key': '0ae73afa42msh492c768e6f710ddp1f96e6jsnc03826257744',
        'x-rapidapi-host': 'shazam.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      setSearchTracks(response.data.tracks.hits);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);
  return (
    <LinearGradient colors={['#614385', '#516395']} style={{flex: 1}}>
      <View style={{flex: 1, marginTop: 50}}>
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
                onChangeText={setSearchText}
              />
            </Pressable>
          </Pressable>
        </View>

        <View style={{marginHorizontal: 10, marginVertical: 10}}>
          <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>
            Search Songs
          </Text>
          <Text style={{fontSize: 13, color: 'white', marginTop: 5}}>S</Text>
        </View>

        {loading ? (
          <ActivityIndicator size={'large'} color={'gray'} />
        ) : (
          <FlatList
            data={searchedTracks}
            keyExtractor={item => item.track.key}
            renderItem={({item}) => (
              <Pressable>
                <View style={styles.trackContainer}>
                  <Image
                    source={{uri: item.track.images.coverart}}
                    style={styles.albumCover}
                  />
                  <View style={styles.trackInfo}>
                    <Text style={styles.trackName}>{item.track.title}</Text>
                    <Text style={styles.artistName}>{item.track.subtitle}</Text>
                  </View>

                  <Entypo name="controller-play" size={24} color="white" />
                </View>
              </Pressable>
            )}
          />
        )}
      </View>
    </LinearGradient>
  );
};

export default SongsScreen;

const styles = StyleSheet.create({
  trackContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  albumCover: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  trackInfo: {
    flex: 1,
    marginLeft: 10,
  },
  trackName: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  artistName: {
    fontSize: 14,
    color: '#FFE3E3',
  },
});
