import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons';

const SongInfoScreen = () => {
  const route = useRoute();
  // HomeScreenden gonderilen veriyi useRoute ile aldik
  const {album} = route.params || {};
  //Gelen verileri parcalayarak aldik

  const {coverArt, artist, name, year} = album;
  return (
    <LinearGradient colors={['#040306', '#131624']} style={{flex: 1}}>
      <ScrollView style={styles.ScrollView}>
        <View>
          <TouchableOpacity>
            <Ionicons
              name="arrow-back"
              size={32}
              color="white"
              style={styles.backButton}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default SongInfoScreen;

const styles = StyleSheet.create({
  ScrollView: {},
});
