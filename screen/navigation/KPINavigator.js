import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import KPIDetailScreen from '../KPIDetailScreen';
import KPIScreen from '../KPIScreen';

const Stack = createStackNavigator();

const KPINavigator = () => {
  return (
    <Stack.Navigator initialRouteName="KPIScreen" screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#6200ee' },
      }}>
      <Stack.Screen name="KPIScreen" component={KPIScreen} options={{ headerShown: false }} />
      <Stack.Screen name="KPIDetailScreen" component={KPIDetailScreen} options={{headerTitle: 'KPI Detail', headerBackTitle:'Back'}} />
    </Stack.Navigator>
  );
};

export default KPINavigator;
