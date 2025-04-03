import {
  ArrowLeftIcon,
  CloseIcon,
  HomeIcon,
  ImageIcon,
  MinusIcon,
  MoonIcon,
  PlusIcon,
  SearchIcon,
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
  image: ImageIcon,
  search: SearchIcon,
};

export type IconName = keyof typeof iconMap;
