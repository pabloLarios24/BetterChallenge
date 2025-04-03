import {IIconProps} from '../../icons/Icon.types.ts';
import {iconMap, IconName} from '@/components/atoms/Icon/icons.ts';

export interface IIconCustomProps extends IIconProps {
  name?: IconName;
}

export const IconCustom = ({name, sizeIcon, color}: IIconCustomProps) => {
  if (name) {
    const IconComponent = iconMap[name];
    return <IconComponent sizeIcon={sizeIcon} color={color} />;
  } else {
    return null;
  }
};
