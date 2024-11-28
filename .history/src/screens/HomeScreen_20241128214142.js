import {Image, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Loader from '../components/Loader';

const HomeScreen = () => {
  return (
    <LinearGradient colors={['#040306', '#131624']} style={{flex: 1}}>
      <Loader />
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image />
            <Text>Message</Text>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {},
  headerContent: {},
});
