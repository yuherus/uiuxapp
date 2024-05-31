import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../ProfileScreen';
import EditProfileScreen from '../EditProfileScreen';
import HelpScreen from '../HelpScreen';
import SettingsScreen from '../SettingScreen';
import NotificationSettingsScreen from '../NotificationSettingScreen';
import ChangePassScreen from '../ChangePassScreen';

const Stack = createStackNavigator();

const SettingNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SettingScreen" screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#6200ee' },
      }}>
      <Stack.Screen name="SettingScreen" component={SettingsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="NotificationSettingScreen" component={NotificationSettingsScreen} options={{headerTitle: 'Notification Setting'}} />
      <Stack.Screen name="ChangePassScreen" component={ChangePassScreen} options={{headerTitle: 'Change Password'}}/>
    </Stack.Navigator>
  );
};

export default SettingNavigator;
