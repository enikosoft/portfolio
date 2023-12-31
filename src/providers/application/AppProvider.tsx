import { useState } from "react";
import AppContext from "./AppContext";

export const AppProvider = ({ children }) => {
  const [isResponsiveTabBar, setResponsiveTabBar] = useState(false);

  const state = {
    isResponsiveTabBar,
    setResponsiveTabBar,
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export default AppProvider;
