import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './screens/HomeScreen';
import GalleryScreen from './screens/GalleryScreen';
import SnapScreen from './screens/SnapScreen';
import { Provider } from 'react-redux';
import store from './src/store/store';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ color, size }) => {
      let iconName = '';

      if (route.name === 'GalleryScreen') {
        iconName = 'image';
      } else if (route.name === 'SnapScreen') {
        iconName = 'camera';
      }

      return <FontAwesome name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: '#e8be4b',
    tabBarInactiveTintColor: '#b2b2b2',
    headerShown: false,
    tabBarStyle: [
      {
        display: 'flex',
      },
      null,
    ],
  });

  const TabNavigator = () => (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="GalleryScreen" component={GalleryScreen} />
      <Tab.Screen name="SnapScreen" component={SnapScreen} />
    </Tab.Navigator>
  );

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
