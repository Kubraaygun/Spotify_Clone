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
import TrackPlayer, {useProgress} from 'react-native-track-player';
import Modal from 'react-native-modal';
import {useNavigation} from '@react-navigation/native';

const SongsScreen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('Türkiye de popüler müzikler');
  const [searchedTracks, setSearchTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

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

  const setupPlayer = async () => {
    try {
      /**
       *TrackPlayer kutuphanesinin oynaticiyi kurmasini saglar. 
       Bu islemde oynaticiyi baslatmak icin gerekli olan yapilandirma yapildi.
       */
      await TrackPlayer.setupPlayer();
      TrackPlayer.updateOptions({
        capabilities: [
          TrackPlayer.CAPABILITY_PLAY,
          TrackPlayer.CAPABILITY_PAUSE,
          TrackPlayer.CAPABILITY_STOP,
          TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
          TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
          TrackPlayer.CAPABILITY_SEEK_TO,
        ],
      });
    } catch (error) {
      console.log('Error stting up player', error);
    }
  };
  const handlePlay = async track => {
    if (selectedTrack && selectedTrack.key === track.track.key) {
      await TrackPlayer.pause();
      setIsPlaying(false);
      return;
    }
    const trackData = {
      id: track.track.key,
      url: track.track.hub.actions.find(action => action.type === 'uri').uri,
      title: track.track.title,
      artist: track.track.subtitle,
      artwork: track.track.images.coverart,
    };
    try {
      await TrackPlayer.reset();
      await TrackPlayer.add(trackData);
      await TrackPlayer.play();
      setSelectedTrack(track.track);
      setModalVisible(true);
      setIsPlaying(true);
    } catch (error) {
      console.error(error);
    }
  };

  const formatTime = seconds => {
    //Toplam saniyeyi dakikaya cevir
    const mins = Math.floor(seconds / 60);
    // Toplam saniye sayisindan geriye kaalan saniyeyi hesapla
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}`;
  };

  const togglePlayback = async () => {
    if (isPlaying) {
      //Muzik oynatiliyor ise durdur
      await TrackPlayer.pause();
    } else {
      //Muzik durduruluyor ise oynat
      await TrackPlayer.play();
    }
    //Oynatma ve durdurma tam tersi cevir
    setIsPlaying(!isPlaying);
  };
  //Muzigi 10 sn geri al
  const seekBackward = async () => {
    const position = await TrackPlayer.getPosition();
    await TrackPlayer.seekTo(position - 10);
  };
  // Muzigi 10 sn ileri al
  const seekForward = async () => {
    const position = await TrackPlayer.getPosition();
    await TrackPlayer.seekTo(position + 10);
  };

  useEffect(() => {
    handleSearch();
    setupPlayer();
  }, []);
  return (
    <>
      <LinearGradient colors={['#614385', '#516395']} style={{flex: 1}}>
        <View style={{flex: 1, marginTop: 50}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Pressable
              onPress={() => navigation.goBack()}
              style={{marginHorizontal: 10}}>
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
                  onSubmitEditing={handleSearch}
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
                <Pressable onPress={() => handlePlay(item)}>
                  <View style={styles.trackContainer}>
                    <Image
                      source={{uri: item.track.images.coverart}}
                      style={styles.albumCover}
                    />
                    <View style={styles.trackInfo}>
                      <Text style={styles.trackName}>{item.track.title}</Text>
                      <Text style={styles.artistName}>
                        {item.track.subtitle}
                      </Text>
                    </View>

                    <Entypo name="controller-play" size={24} color="white" />
                  </View>
                </Pressable>
              )}
            />
          )}
        </View>
      </LinearGradient>
      <Modal></Modal>
    </>
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
