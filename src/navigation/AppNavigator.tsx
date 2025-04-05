import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from '@/navigation/TabNavigator.tsx';

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'FullStack'} component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
