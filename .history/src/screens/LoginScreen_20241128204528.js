import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo';

const LoginScreen = () => {
  return (
    <LinearGradient colors={['#040306', '#131624']} style={{flex: 1}}>
      <SafeAreaView>
        <View style={{height: 80}} />
        <Entypo
          name="spotify"
          color="white"
          size={80}
          style={{textAlign: 'center'}}
        />
        <Text style={styles.loginTitle}>Millions of Songs Free on Spotify</Text>
        <View style={{height: 80}} />

        <Pressable style={styles.loginButton}>
          <Text style={styles.buttonText}>Sign in with Spotify!</Text>
        </Pressable>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Continue with phone number</Text>
        </Pressable>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Continue with phone Google</Text>
        </Pressable>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Continue with phone Facebook</Text>
        </Pressable>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  loginTitle: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
  },
  loginButton: {
    backgroundColor: '#1AD35E',
    padding: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 25,
  },
  button: {
    backgroundColor: '#131624',
    padding: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
    borderColor: '#C0C0C0',
    width: '300',
    borderWidth: 0.8,
    marginVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
