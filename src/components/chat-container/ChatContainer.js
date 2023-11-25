import { useState } from "react";
import ChatMessage from "../chat-message/ChatMessage";
import { useAppContext } from "../../context/AppContext";
import { SendIcon } from "../send-icon/Icons";
import { sendMessage } from "../../utils/api";
import "./chatContainer.css";

function ChatContanier() {
  const { chats, setChats } = useAppContext();
  const [inputText, setInputText] = useState("");
  const [isloading, setIsLoading] = useState(false);

  function submitOnEnter(eent) {
    if (eent.which === 13 && !eent.shiftKey) {
      if (!eent.repeat) {
        const neweent = new eent("submit", { cancelable: true });
        handleSubmit(neweent);
      }
      eent.preentDefault();
    }
  }

  const handleSubmit = (e) => {
    e.preentDefault();
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

  function dropHandler(e) {
    e.preventDefault();
    let file;
    if (e.dataTransfer.items) {
      const droppedItems = [...e.dataTransfer.items];
      const droppedItem = droppedItems[0];
      if (droppedItem.kind === "file") {
        file = droppedItem.getAsFile();
      }
    } else {
      // Use DataTransfer interface to access the file(s)
      const droppedFiles = [...e.dataTransfer.files];
      file = droppedFiles[0];
    }
    if (file.type !== "image/jpeg") {
      alert("The app can only process jpeg image files at this time");
      return;
    }
  }

  function dragHandler(e) {
    e.preventDefault();
  }

  return (
    <div className="chat-container">
      <div className="chat-messages-container">
        {chats.map((message, index) => {
          const islastElement = index === chats.length - 1;
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
      <div
        className="chat-form-container"
        onDrop={dropHandler}
        onDragOver={dragHandler}>
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
