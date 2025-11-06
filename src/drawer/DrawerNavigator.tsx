// src/drawer/DrawerNavigator.tsx
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import BottomTabNavigator from '../bottom-tab/BottomTabNavigator';
import AboutScreen from './AboutScreen';
import ContactScreen from './ContactScreen';
import ReferScreen from './ReferScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#6C63FF',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: { marginLeft: -15, fontSize: 15 },
      }}
    >
      <Drawer.Screen
        name="HomeTabs"
        component={BottomTabNavigator}
        options={{
          drawerLabel: 'Home',
          drawerIcon: ({ color }) => <Icon name="home-outline" size={22} color={color} />,
        }}
      />
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{
          drawerIcon: ({ color }) => <Icon name="information-outline" size={22} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          drawerIcon: ({ color }) => <Icon name="phone-outline" size={22} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Refer"
        component={ReferScreen}
        options={{
          drawerLabel: 'Refer & Earn',
          drawerIcon: ({ color }) => <Icon name="gift-outline" size={22} color={color} />,
        }}
      />
    </Drawer.Navigator>
  );
}
