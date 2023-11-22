import { useState, createContext, useContext } from "react";

const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [data, setData] = useState("Test");

  const value = {
    data,
    setData,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const value = useContext(AppContext);
  return value;
}
