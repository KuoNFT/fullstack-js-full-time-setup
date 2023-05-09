import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera, faImage } from '@fortawesome/free-solid-svg-icons';
import HomeScreen from './screens/HomeScreen';
import GalleryScreen from './screens/GalleryScreen';
import SnapScreen from './screens/SnapScreen';
import { Provider } from 'react-redux';
import store from './src/store/store'
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'GalleryScreen') {
        iconName = faImage;
      } else if (route.name === 'SnapScreen') {
        iconName = faCamera;
      }

      return <FontAwesomeIcon icon={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: '#e8be4b',
    tabBarInactiveTintColor: '#b2b2b2',
    tabBarStyle: [
      {
        display: 'flex',
      },
      null,
    ],
  });

  const MainTabs = () => (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="GalleryScreen" component={GalleryScreen} />
      <Tab.Screen name="SnapScreen" component={SnapScreen} />
    </Tab.Navigator>
  );

  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Main" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;
