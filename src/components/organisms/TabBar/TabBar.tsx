import {ITabBarItemProps, TabBarItem} from '@/components';
import {Container, ContainerTabBar} from './TabBar.styles.ts';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface ITabBarProps {
  options: ITabBarItemProps[];
}

export const TabBar = ({options}: ITabBarProps) => {
  const insets = useSafeAreaInsets();
  return (
    <Container $bottomInset={insets.bottom}>
      <ContainerTabBar>
        {options.map((option, i) => (
          <TabBarItem key={`${i}${option.title}`} {...option} />
        ))}
      </ContainerTabBar>
    </Container>
  );
};
