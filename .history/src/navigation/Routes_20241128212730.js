import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import LikedSongScreen from '../screens/LikedSongScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SongInfoScreen from '../screens/SongInfoScreen';
import {HOME, INFO, LIKED, LOGIN, MAIN, PROFILE} from '../utils/routes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import IonIcons from 'react-native-vector-icons/IonIcons';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#131624',
          shadowOpacity: 0.3,
          shadowRadius: 4,
          shadowOffset: {
            width: 0,
            height: -10,
          },
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 90,
          borderWidth: 0,
        },
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarLabelStyle: {
            color: 'white',
            fontSize: 13,
            fontWeight: '500',
          },
          tabBarIcon: ({focused}) =>
            focused ? (
              <Entypo name="home" color="white" size={24} />
            ) : (
              <AntDesign name="home" color="white" size={24} />
            ),
        }}
        name={HOME}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarLabelStyle: {
            color: 'white',
            fontSize: 13,
            fontWeight: '500',
          },
          tabBarIcon: ({focused}) => (
            <IonIcons name="person" color="white" size={24} />
          ):(
            <IonIcons name="person-outline" color="white" size={24} />
          ),
        }}
        name={PROFILE}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={LOGIN} component={LoginScreen} />
        <Stack.Screen name={MAIN} component={BottomTabs} />
        <Stack.Screen name={LIKED} component={LikedSongScreen} />
        <Stack.Screen name={INFO} component={SongInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
