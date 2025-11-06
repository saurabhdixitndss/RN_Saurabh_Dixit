// src/bottom-tab/BottomTabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon  from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import MarketPlaceScreen from './MarketPlaceScreen';
import LeaderboardScreen from './LeaderboardScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          height: 70,
          position: 'absolute',
          elevation: 10,
        },
        tabBarActiveTintColor: '#6C63FF',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ color, size, focused }) => {
          let iconName = '';

          if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'MarketPlace') iconName = focused ? 'cart' : 'cart-outline';
          else if (route.name === 'Leaderboard') iconName = focused ? 'trophy' : 'trophy-outline';
          else if (route.name === 'Profile') iconName = focused ? 'person' : 'person-outline';

          return <Icon name={iconName} size={24} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="MarketPlace" component={MarketPlaceScreen} />
      <Tab.Screen name="Leaderboard" component={LeaderboardScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
