import {ReactNode, useState} from 'react';
import {AppContext} from './AppContext';

export const AppProvider = ({children}: {children: ReactNode}) => {
  const [isResponsiveTabBar, setResponsiveTabBar] = useState<boolean>(false);
  const [pdfPreviewerOpen, setPdfPreviewerOpen] = useState<boolean>(false);

  const state = {
    isResponsiveTabBar,
    setResponsiveTabBar,
    pdfPreviewerOpen,
    setPdfPreviewerOpen,
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export default AppProvider;
