import "./App.css";
import TitleBar from "./components/titlebar/Titlebar";
import LeftSideBar from "./components/left-sidebar/LeftSideBar";
import ChatContanier from "./components/chat-container/ChatContainer";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <main className="main">
      <TitleBar />
      <section className="main-section">
        <LeftSideBar />
        <ChatContanier />
      </section>
      <Footer />
    </main>
  );
}

export default App;
