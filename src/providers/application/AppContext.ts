import { createContext } from "react";

export interface AppContext {
  isResponsiveTabBar: boolean;
  setResponsiveTabBar(isResponsiveTabBar: boolean): void;
}

const appContext = createContext<AppContext | null>(null);
export default appContext;
