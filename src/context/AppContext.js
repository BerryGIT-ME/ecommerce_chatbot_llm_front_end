import { useState, createContext, useContext } from "react";

const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [chats, setChats] = useState([]);

  const value = {
    chats,
    setChats,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const value = useContext(AppContext);
  return value;
}
