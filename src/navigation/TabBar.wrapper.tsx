import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {ITabBarItemProps, TabBar} from '@/components';
import {IconName} from '@/components/atoms/Icon/icons.ts';
import {selectTotalCartItems} from '@/store/cart/selectors.ts';
import {useSelector} from 'react-redux';

type RouteName = 'HomeTab' | 'ShoppingCartTab' | 'MenuTab';

const icons: Record<RouteName, IconName> = {
  HomeTab: 'home',
  ShoppingCartTab: 'shoppingCart',
  MenuTab: 'menu',
};

export const TabBarWrapper = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const totalItems = useSelector(selectTotalCartItems);
  const items: ITabBarItemProps[] = state.routes.map((route, index) => {
    const {options} = descriptors[route.key];

    return {
      quantity: route.name === 'ShoppingCartTab' ? totalItems : 0,
      nameIcon: icons[route.name as RouteName],
      title: options.title ?? '',
      isSelected: state.index === index,
      onPress: () => {
        if (state.index !== index) {
          navigation.navigate(route.name);
        }
      },
    };
  });

  return <TabBar options={items} />;
};
