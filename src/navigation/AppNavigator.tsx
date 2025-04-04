import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import TabNavigator from '@/navigation/TabNavigator.tsx';

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'HomeStack'} component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
