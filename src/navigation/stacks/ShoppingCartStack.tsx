import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ShoppingCartParams} from '@/navigation/types/ShoppingCartParams.tsx';

import ShoppingCartController from '@/screens/shoppingCart/ShoppingCart/ShoppingCart.controller.tsx';

const ShoppingCartStack: React.FC = () => {
  const Stack = createNativeStackNavigator<ShoppingCartParams>();
  return (
    <Stack.Navigator
      initialRouteName={'ShoppingCart'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={'ShoppingCart'} component={ShoppingCartController} />
    </Stack.Navigator>
  );
};

export default ShoppingCartStack;
