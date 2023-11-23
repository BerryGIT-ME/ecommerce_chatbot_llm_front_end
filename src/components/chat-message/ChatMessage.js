import "./chatMessage.css";

function getChatType(chatRole) {
  const chatType =
    chatRole.toLowerCase() === "user"
      ? "user-chatmessage"
      : "assistant-chatmessage";
  return chatType;
}

function ChatMessage(props) {
  const { chatItem } = props;

  const chatType = getChatType(chatItem.chat.role);
  return (
    <div className={"chat-message-container " + chatType + "-container"}>
      <div className={chatType + " chat-message"}>{chatItem.chat.content}</div>
    </div>
  );
}

export default ChatMessage;
