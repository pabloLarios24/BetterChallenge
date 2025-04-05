import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ProductStackParams} from '@/navigation/types/ProductsStackParams.tsx';

import HomeController from '@/screens/products/Home/Home.controller.tsx';
import SearchProductsController from '@/screens/products/SearchProducts/SearchProducts.controller.tsx';
import DetailProductController from '@/screens/products/DetailProduct/DetailProduct.controller.tsx';

const HomeStack: React.FC = () => {
  const Stack = createNativeStackNavigator<ProductStackParams>();
  return (
    <Stack.Navigator
      initialRouteName={'Home'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeController} />
      <Stack.Screen
        name={'SearchProduct'}
        component={SearchProductsController}
      />
      <Stack.Screen
        name={'DetailProduct'}
        component={DetailProductController}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
