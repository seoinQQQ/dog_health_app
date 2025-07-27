import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SnackRecordsScreen from './screens/SnackRecordsScreen';
import WalkRecordsScreen from './screens/WalkRecordsScreen';
import HospitalRecordsScreen from './screens/HospitalRecordsScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Snacks" component={SnackRecordsScreen} />
        <Tab.Screen name="Walks" component={WalkRecordsScreen} />
        <Tab.Screen name="Hospitals" component={HospitalRecordsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
