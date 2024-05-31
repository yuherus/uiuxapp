import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import KPIDetailScreen from '../KPIDetailScreen';
import KPIScreen from '../KPIScreen';
import PlanScreen from '../PlanScreen';
import PlanDetailScreen from '../PlanDetailScreen';

const Stack = createStackNavigator();

const PlanNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="PlanScreen" screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#6200ee' },
      }}>
      <Stack.Screen name="PlanScreen" component={PlanScreen} options={{ headerShown: false }} />
      <Stack.Screen name="PlanDetailScreen" component={PlanDetailScreen} options={{headerTitle: 'Plan Detail', headerBackTitle: 'Back'}} />
    </Stack.Navigator>
  );
};

export default PlanNavigator;
