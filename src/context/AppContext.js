import { useState, createContext, useContext } from "react";

const AppContext = createContext();

const initializeChat = [
  {
    chat: {
      role: "assistant",
      content: "Hi there, how can I assist you find the right product",
    },
    suggestions: [],
  },
];

export function AppContextProvider({ children }) {
  const [chats, setChats] = useState(initializeChat);

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
