import { useEffect } from "react";
import { sendMessage } from "./utils/api";
import "./App.css";
import { useAppContext } from "./context/AppContext";
import TitleBar from "./components/titlebar/Titlebar";
import LeftSideBar from "./components/left-sidebar/LeftSideBar";
import ChatContanier from "./components/chat-container/ChatContainer";

function App() {
  const value = useAppContext();
  useEffect(() => {
    const messages = [
      { role: "user", content: "Can you generate sql queries?" },
    ];
    // sendMessage({ messages });
    // value.setData("New text");
  });

  return (
    <main className="main">
      <TitleBar />
      <section className="main-section">
        <LeftSideBar />
        <ChatContanier />
      </section>
    </main>
  );
}

export default App;
