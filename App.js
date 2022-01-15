import React from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import LyricsScreen from './screens/LyricsScreen';
import AboutScreen from './screens/AboutScreen';


let homeName = 'Home';
let aboutName = 'About';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? 'home' : 'home-outline'
          } else if (rn === aboutName) {
            iconName = focused ? 'list' : 'list-outline'
          }

          return <Ionicons name={iconName} size={size} color={color} />

        },
      })}
    >

      <Tab.Screen name={homeName} component={HomeScreen} />
      <Tab.Screen name={aboutName} component={AboutScreen} />

    </Tab.Navigator>
  );
}


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Homepage" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Lyrics" component={LyricsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}