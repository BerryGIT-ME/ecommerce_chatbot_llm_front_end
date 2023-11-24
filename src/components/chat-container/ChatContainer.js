import { useEffect, useState } from "react";
import ChatMessage from "../chat-message/ChatMessage";
import { useAppContext } from "../../context/AppContext";
import { SendIcon } from "../send-icon/Icons";
import { sendMessage } from "../../utils/api";
import "./chatContainer.css";

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
    if (isloading) return;
    if (inputText === "") return;
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
      <div className="chat-messages-container">
        {chats.map((message, index) => {
          const islastElement = index == chats.length - 1;
          return (
            <ChatMessage
              chatItem={message}
              key={index}
              islastElement={islastElement}
            />
          );
        })}
        {isloading && (
          <ChatMessage
            chatItem={{ chat: { role: "assistant", content: "Thinking..." } }}
            islastElement
          />
        )}
      </div>
      <div className="chat-form-container">
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
