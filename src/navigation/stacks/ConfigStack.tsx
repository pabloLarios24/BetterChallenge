import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import MenuController from '@/screens/config/Menu/Menu.controller.tsx';
import {ConfigStackParams} from '@/navigation/types/ConfigStackParams.tsx';

const ConfigStack: React.FC = () => {
  const Stack = createNativeStackNavigator<ConfigStackParams>();
  return (
    <Stack.Navigator
      initialRouteName={'Menu'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Menu'} component={MenuController} />
    </Stack.Navigator>
  );
};

export default ConfigStack;
