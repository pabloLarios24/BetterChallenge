import React, {createContext, useContext, useEffect, useState} from 'react';
import {ThemeProvider} from 'styled-components/native';
import {darkTheme, lightTheme, ThemeType} from './theme';
import {useColorScheme} from 'react-native';

type ThemeContextType = {
  theme: ThemeType;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useAppTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useAppTheme must be used inside ThemeProviderWrapper');
  }
  return context;
};

export const ThemeProviderWrapper: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [theme, setTheme] = useState<ThemeType>(lightTheme);
  const systemScheme = useColorScheme();

  useEffect(() => {
    setTheme(systemScheme === 'dark' ? darkTheme : lightTheme);
  }, [systemScheme]);

  const toggleTheme = () => {
    setTheme(prev => (prev.mode === 'light' ? darkTheme : lightTheme));
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
