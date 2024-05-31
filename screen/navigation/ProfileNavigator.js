import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../ProfileScreen';
import EditProfileScreen from '../EditProfileScreen';
import HelpScreen from '../HelpScreen';

const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Profile" screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#6200ee' },
      }}>
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{headerTitle: 'Edit Profile'}} />
      <Stack.Screen name="Help" component={HelpScreen} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
