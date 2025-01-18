/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

// Screens
import Home from './components/navigation/Home';
import Profile from './components/navigation/Profile';


export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
};

const Tabs = createBottomTabNavigator<RootStackParamList>();

const HomeIcon = ({ color }: { color: string }) => (
  <FontAwesomeIcon name="home" size={30} color={color} />
);

const ProfileIcon = ({ color }: { color: string }) => (
  <FontAwesomeIcon name="user" size={30} color={color} />
);

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tabs.Navigator initialRouteName="Home" screenOptions={{
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
      }}>
        <Tabs.Screen name="Home" component={Home} options={{ title: 'Home', tabBarIcon: HomeIcon }} />
        <Tabs.Screen name="Profile" component={Profile} options={{
          tabBarBadge: 3,
          tabBarIcon: ProfileIcon,
        }} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

export default App;
