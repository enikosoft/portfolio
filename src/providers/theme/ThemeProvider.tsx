import {useEffect, useState} from 'react';
import {ThemeContext} from './ThemeContex';
import {Theme} from './types';

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
  const currentTheme = localStorage.getItem('theme') as Theme;
  const [theme, setTheme] = useState<Theme>(currentTheme || Theme.BLUE);

  const toggleTheme = (theme: Theme) => {
    setTheme(theme);
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');

    if (!currentTheme) {
      if (window.matchMedia && window.matchMedia('prefers-color-scheme: blue)')) {
        setTheme(Theme.BLUE);
      }
    } else {
      setTheme(currentTheme as Theme);
    }
  }, []);

  useEffect(() => {
    if (theme === Theme.BLUE) {
      document.body.className = 'theme-blue';
    } else if (theme === Theme.DARK) {
      document.body.className = 'theme-dark';
    } else if (theme === Theme.LIGHT) {
      document.body.className = 'theme-light';
    }

    if (
      theme === Theme.BLUE ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: blue)').matches)
    ) {
      document.documentElement.classList.add('blue');
    } else {
      document.documentElement.classList.remove('blue');
    }

    if (
      theme === Theme.LIGHT ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)
    ) {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  return <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>;
};
