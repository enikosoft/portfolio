import {createContext} from 'react';

export interface AppContextInterface {
  isResponsiveTabBar: boolean;
  setResponsiveTabBar(isResponsiveTabBar: boolean): void;

  pdfPreviewerOpen: boolean;
  setPdfPreviewerOpen(pdfPreviewerOpen: boolean): void;
}

export const AppContext = createContext<AppContextInterface | null>(null);
