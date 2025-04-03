import {IconName} from '@/components/atoms/Icon/icons.ts';
import {Container} from './TabBarItem.styles.ts';
import {IconCustom, TextBase} from '@/components';

export interface ITabBarItemProps {
  title: string;
  nameIcon: IconName;
  isSelected: boolean;
  onPress?: () => void;
}

export const TabBarItem = ({
  title,
  nameIcon,
  isSelected,
  onPress,
}: ITabBarItemProps) => {
  return (
    <Container onPress={onPress}>
      <IconCustom
        name={nameIcon}
        sizeIcon={20}
        color={isSelected ? 'textButton' : 'text'}
      />
      <TextBase
        textType={isSelected ? 'h4' : 'h5'}
        bold
        text={title}
        isButton={isSelected}
      />
    </Container>
  );
};
