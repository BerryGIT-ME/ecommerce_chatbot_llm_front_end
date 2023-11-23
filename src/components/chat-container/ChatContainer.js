import { useEffect, useState } from "react";
import ChatMessage from "../chat-message/ChatMessage";
import { useAppContext } from "../../context/AppContext";
import SendIcon from "../send-icon/SendIcon";
import { sendMessage } from "../../utils/api";
import "./chatContainer.css";

const testMessages = [
  {
    chat: {
      role: "assistant",
      content: "Hi there, how can I assist you find the right product",
    },
    suggestions: [],
  },
  {
    chat: {
      role: "user",
      content: "Thanks I'd like to know more if you have some red gucci bags",
    },
    suggestions: [],
  },
  // {
  //   chat: {
  //     role: "asssitant",
  //     content:
  //       "Sure here are some of what we have at the moment,  Added to see effect of more text. Sure here are some of what we have at the moment The universe is a vast expanse that encompasses everything we know and can ever possibly know. It includes all matter, energy, space, and time. It is believed to have originated from a single point during an event called the Big Bang, approximately 13.8 billion years ago. The universe is composed of billions of galaxies, each containing millions to billions of stars, along with various celestial objects like planets, moons, asteroids, and comets. Our own galaxy, the Milky Way, is just one among countless others. Scientists have been studying the universe for centuries, using telescopes and other instruments to observe and analyze celestial objects. They have discovered numerous fascinating phenomena, such as black holes, galaxies colliding, and the expansion of space itself. While there is still much we don't know about the universe, significant progress has been made in understanding its fundamental principles. Various theories, such as the theory of general relativity and quantum mechanics, have provided insight into the workings of the universe, although there is ongoing scientific research and exploration to deepen our understanding further. If you have any specific questions or would like to know more about a particular aspect of the universe, feel free to ask! The universe is a vast expanse that encompasses everything we know and can ever possibly know. It includes all matter, energy, space, and time. It is believed to have originated from a single point during an event called the Big Bang, approximately 13.8 billion years ago. The universe is composed of billions of galaxies, each containing millions to billions of stars, along with various celestial objects like planets, moons, asteroids, and comets. Our own galaxy, the Milky Way, is just one among countless others. Scientists have been studying the universe for centuries, using telescopes and other instruments to observe and analyze celestial objects. They have discovered numerous fascinating phenomena, such as black holes, galaxies colliding, and the expansion of space itself. While there is still much we don't know about the universe, significant progress has been made in understanding its fundamental principles. Various theories, such as the theory of general relativity and quantum mechanics, have provided insight into the workings of the universe, although there is ongoing scientific research and exploration to deepen our understanding further. If you have any specific questions or would like to know more about a particular aspect of the universe, feel free to ask!",
  //   },
  //   suggestions: [
  //     {
  //       name: "Gucci bag",
  //       price: 2000,
  //       image: "https://images.unsplash.com/photo-1682687220499-d9c06b872eee",
  //     },
  //     {
  //       name: "Gucci bag2",
  //       price: 2000,
  //       image:
  //         "https://plus.unsplash.com/premium_photo-1698524748767-02132ca18c68",
  //     },
  //   ],
  // },
];

function ChatContanier() {
  const { chats, setChats } = useAppContext();
  const [inputText, setInputText] = useState("");
  const [isloading, setIsLoading] = useState(false);

  function submitOnEnter(event) {
    if (event.which === 13 && !event.shiftKey) {
      if (!event.repeat) {
        const newEvent = new Event("submit", { cancelable: true });
        handleSubmit(newEvent);
      }
      event.preventDefault();
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const chatItem = {
      chat: { role: "user", content: inputText },
      suggestions: [],
    };

    const updatedChats = [...chats, chatItem];
    setChats(updatedChats);

    const cleanup = (status, data) => {
      if (status) {
        setChats((chats) => [...chats, data]);
      }
      setIsLoading(false);
    };

    setIsLoading(true);
    setInputText("");
    sendMessage(updatedChats, cleanup);
  };
  return (
    <div className="chat-container">
      {testMessages.map((message, index) => (
        <ChatMessage
          chatItem={message}
          key={index}
        />
      ))}
      {isloading && <div>Loading...</div>}
      <div style={{ margin: "1rem 0rem", padding: "0rem 1rem" }}>
        <form
          className="form-style"
          onSubmit={handleSubmit}>
          <textarea
            // row={4}
            autoFocus
            className="input-style common-input-style"
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={submitOnEnter}
            placeholder="Chat with our store assistant e.g What are some top products right now"
          />
          <div className="input-btns-container common-input-style">
            <button
              className="send-btn"
              type="submit">
              <SendIcon />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChatContanier;
