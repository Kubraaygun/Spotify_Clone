import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import LikedSongScreen from '../screens/LikedSongScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {HOME, LIKED, LOGIN, PROFILE} from '../utils/routes';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={LOGIN} component={LoginScreen} />
        <Stack.Screen name={HOME} component={HomeScreen} />
        <Stack.Screen name={LIKED} component={LikedSongScreen} />
        <Stack.Screen name={PROFILE} component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
