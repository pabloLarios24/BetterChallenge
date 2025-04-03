import {ITabBarItemProps, TabBarItem} from '@/components';
import {Container} from './TabBar.styles.ts';

interface ITabBarProps {
  options: ITabBarItemProps[];
}

export const TabBar = ({options}: ITabBarProps) => {
  return (
    <Container>
      {options.map((option, i) => (
        <TabBarItem key={`${i}${option.title}`} {...option} />
      ))}
    </Container>
  );
};
