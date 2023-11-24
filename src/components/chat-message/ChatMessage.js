import { useEffect, useRef } from "react";
import { RobotIcon, UserIcon } from "../send-icon/Icons";
import "./chatMessage.css";

function getChatType(chatRole) {
  const chatType =
    chatRole.toLowerCase() === "user"
      ? "user-chatmessage"
      : "assistant-chatmessage";
  return chatType;
}

function ChatMessage(props) {
  const { chatItem, islastElement } = props;
  const last_element_ref = useRef();

  useEffect(() => {
    if (islastElement) {
      last_element_ref.current.scrollIntoView();
    }
  }, []);

  const chatType = getChatType(chatItem.chat.role);
  const text = (
    <div className={chatType + " chat-message"}>{chatItem.chat.content}</div>
  );
  return (
    <div
      ref={islastElement ? last_element_ref : undefined}
      id={islastElement ? "last-element" : ""}
      className={"chat-message-container " + chatType + "-container"}>
      {chatType === "user-chatmessage" ? (
        <>
          {text}
          <UserIcon />
        </>
      ) : (
        <>
          <RobotIcon />
          {text}
        </>
      )}
    </div>
  );
}

export default ChatMessage;
