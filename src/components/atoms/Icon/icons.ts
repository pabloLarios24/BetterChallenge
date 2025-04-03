import {
  ArrowLeftIcon,
  CloseIcon,
  HomeIcon,
  MinusIcon,
  MoonIcon,
  PlusIcon,
  ShoppingCartIcon,
  SunIcon,
} from '../../icons';

export const iconMap = {
  home: HomeIcon,
  close: CloseIcon,
  arrowLeft: ArrowLeftIcon,
  minus: MinusIcon,
  moon: MoonIcon,
  plus: PlusIcon,
  sun: SunIcon,
  shoppingCart: ShoppingCartIcon,
};

export type IconName = keyof typeof iconMap;
