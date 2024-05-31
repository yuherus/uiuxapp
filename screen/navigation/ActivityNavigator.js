import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ActivityScreen from '../ActivityScreen';
import ActivityDetailScreen from '../ActivityDetailScreen';

const Stack = createStackNavigator();

const ActivityNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="ActivityScreen" screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#6200ee' },
      }}>
      <Stack.Screen name="ActivityScreen" component={ActivityScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ActivityDetailScreen" component={ActivityDetailScreen} options={{headerTitle: 'Activity Detail', headerBackTitle:'Back'}} />
    </Stack.Navigator>
  );
};

export default ActivityNavigator;
