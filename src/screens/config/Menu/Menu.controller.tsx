import React from 'react';
import {useAppTheme} from '@/theme/Theme.context.tsx';
import MenuView from '@/screens/config/Menu/Menu.view.tsx';

const MenuController: React.FC = () => {
  const {toggleTheme, theme} = useAppTheme();
  const handleToggleTheme = () => {
    toggleTheme();
  };
  const isLight = theme.mode === 'light';
  return <MenuView isLight={isLight} handleToggleTheme={handleToggleTheme} />;
};
export default MenuController;
