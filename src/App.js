import { useEffect } from "react";
import { sendMessage } from "./utils/api";
import "./App.css";
import { useAppContext } from "./context/AppContext";
import TitleBar from "./components/Titlebar";
import LeftSideBar from "./components/LeftSideBar";
import RightSideBar from "./components/RightSideBar";
import ChatContanier from "./components/ChatContainer";

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
        <RightSideBar />
      </section>
    </main>
  );
}

export default App;
