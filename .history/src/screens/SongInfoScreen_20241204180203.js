import {StyleSheet, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const SongInfoScreen = () => {
  // HomeScreenden gonderilen veriyi useRoute ile aldik
  const {album} = route.params;
  //Gelen verileri parcalayarak aldik

  const {coverArt, artist, name, year} = album;
  return (
    <LinearGradient
      colors={['#040306', '#131624']}
      style={{flex: 1}}></LinearGradient>
  );
};

export default SongInfoScreen;

const styles = StyleSheet.create({});
