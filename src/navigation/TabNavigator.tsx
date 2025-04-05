import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ProductsStack from '@/navigation/stacks/ProductsStack.tsx';
import ShoppingCartStack from '@/navigation/stacks/ShoppingCartStack.tsx';
import {TabBarWrapper} from '@/navigation/TabBar.wrapper.tsx';
import ConfigStack from '@/navigation/stacks/ConfigStack.tsx';

const TabNavigator: React.FC = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName={'HomeTab'}
      screenOptions={{headerShown: false}}
      tabBar={props => <TabBarWrapper {...props} />}>
      <Tab.Screen
        options={{title: 'Home'}}
        name={'HomeTab'}
        component={ProductsStack}
      />
      <Tab.Screen
        options={{title: 'Carrito'}}
        name={'ShoppingCartTab'}
        component={ShoppingCartStack}
      />
      <Tab.Screen
        options={{title: 'Menu'}}
        name={'Menu'}
        component={ConfigStack}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
