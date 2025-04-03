export const lightTheme = {
  mode: 'light',
  colors: {
    primary: '#4F46E5',
    secondary: '#818CF8',
    background: '#FFFFFF',
    surface: '#F9FAFB',
    text: '#111827',
    success: '#22C55E',
    warning: '#FACC15',
    error: '#EF4444',
    textButton: '#F1F5F9',
  },
};

export const darkTheme = {
  mode: 'dark',
  colors: {
    primary: '#818CF8',
    secondary: '#A5B4FC',
    background: '#0F172A',
    surface: '#1E293B',
    text: '#F1F5F9',
    success: '#4ADE80',
    warning: '#FDE047',
    error: '#F87171',
    textButton: '#F1F5F9',
  },
};

export type ThemeType = typeof lightTheme;
export type ThemeColors = keyof typeof lightTheme.colors;
