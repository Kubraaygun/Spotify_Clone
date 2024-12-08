import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
const SongInfoScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  // HomeScreenden gonderilen veriyi useRoute ile aldik
  const {album} = route.params || {};
  //Gelen verileri parcalayarak aldik

  const {coverArt, artist, name, year} = album;
  return (
    <LinearGradient colors={['#040306', '#131624']} style={{flex: 1}}>
      <ScrollView style={styles.ScrollView}>
        <View style={styles.paddingWiew}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>

          <View style={styles.imageWiew}>
            <Image source={{uri: coverArt}} style={styles.coverImage} />
          </View>
        </View>
        <Text style={styles.albumNameText}>{name}</Text>

        <View style={styles.artistWiew}>
          <Text style={styles.artistText}>{artist}</Text>
        </View>

        <Pressable style={styles.controlView}>
          <Pressable style={styles.downloadButton}>
            <AntDesign name="arrowdown" size={24} color="white" />
          </Pressable>

          <View style={styles.playButtonView}>
            <MaterialCommunityIcons
              name="cross-bolnisi"
              size={24}
              color="white"
            />

            <Pressable style={styles.playButton}>
              <Entypo name="controller-play" size={24} color="white" />
            </Pressable>
          </View>
        </Pressable>

        <View>
          <View style={styles.infoView}>
            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>Album {name}</Text>
              <Text style={styles.infoText}>Artist {artist}</Text>
              <Text style={styles.infoText}>Year {year}</Text>
            </View>
            <Entypo name="dots-three-vertical" size={24} color="white" />
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default SongInfoScreen;

const styles = StyleSheet.create({
  ScrollView: {
    marginTop: 50,
  },
  paddingWiew: {
    padding: 10,
  },
  coverImage: {
    width: 200,
    height: 200,
  },
  imageWiew: {
    fleX: 1,
    alignItems: 'center',
  },
  albumNameText: {
    color: 'white',
    marginHorizontal: 12,
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
  },
  artistWiew: {
    marginHorizontal: 12,
    marginTop: 10,
  },
  artistText: {
    color: '#909090',
    fontSize: 13,
    fontWeight: 'bold',
  },
  controlView: {},
  downloadButton: {},
  playButtonView: {},
  playButton: {},
  infoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoContainer: {
    gap: 5,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});
