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
  const [cartItems, setCartItems] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);
  const [showTutoial, setShowTutoial] = useState(false);

  const value = {
    chats,
    setChats,
    cartItems,
    setCartItems,
    showCartModal,
    setShowCartModal,
    showTutoial,
    setShowTutoial,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const value = useContext(AppContext);
  return value;
}
