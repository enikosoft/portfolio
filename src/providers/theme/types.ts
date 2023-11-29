export enum Theme {
  DARK = 'dark',
  BLUE = 'blue',
  LIGHT = 'light',
}

export interface ThemeContextInterface {
  theme: Theme;
  toggleTheme(theme: Theme): void;
}
