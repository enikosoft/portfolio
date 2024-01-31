import {createContext} from 'react';
import {ThemeContextInterface} from './types';

export const ThemeContext = createContext<ThemeContextInterface | null>(null);
