import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import LikedSongScreen from '../screens/LikedSongScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SongInfoScreen from '../screens/SongInfoScreen';
import {HOME, INFO, LIKED, LOGIN, PROFILE} from '../utils/routes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={HOME} component={HomeScreen} />
      <Tab.Screen name={PROFILE} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={LOGIN} component={LoginScreen} />
        <Stack.Screen name={Main} component={BottomTabs} />
        <Stack.Screen name={LIKED} component={LikedSongScreen} />
        <Stack.Screen name={INFO} component={SongInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
