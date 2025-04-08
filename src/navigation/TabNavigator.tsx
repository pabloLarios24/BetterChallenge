import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ProductsStack from '@/navigation/stacks/ProductsStack.tsx';
import ShoppingCartStack from '@/navigation/stacks/ShoppingCartStack.tsx';
import {TabBarWrapper} from '@/navigation/TabBar.wrapper.tsx';
import ConfigStack from '@/navigation/stacks/ConfigStack.tsx';
import {TEXTS} from '@/constants';

const TabNavigator: React.FC = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName={'HomeTab'}
      screenOptions={{headerShown: false}}
      tabBar={props => <TabBarWrapper {...props} />}>
      <Tab.Screen
        options={{title: TEXTS.tabs.home}}
        name={'HomeTab'}
        component={ProductsStack}
      />
      <Tab.Screen
        options={{title: TEXTS.tabs.shoppingCart}}
        name={'ShoppingCartTab'}
        component={ShoppingCartStack}
      />
      <Tab.Screen
        options={{title: TEXTS.tabs.menu}}
        name={'MenuTab'}
        component={ConfigStack}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
