import { useEffect, useRef } from "react";
import { RobotIcon, UserIcon } from "../send-icon/Icons";
import Product from "../product/Product";
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
  const { chat } = chatItem;
  let { suggestions } = chatItem;
  const last_element_ref = useRef();

  useEffect(() => {
    if (islastElement) {
      last_element_ref.current.scrollIntoView();
    }
  }, [islastElement]);

  const chatType = getChatType(chat.role);

  let text = <div className={chatType + " chat-message"}>{chat.content}</div>;
  if (
    suggestions &&
    suggestions.length &&
    suggestions[0].customer_image_upload
  ) {
    text = (
      <div className={chatType + " chat-message"}>
        <div>{chat.content} </div>
        <div className="uplaoded-image-container">
          <img
            src={suggestions[0].product_image_url}
            className="uploaded-image"
          />
        </div>
      </div>
    );
    suggestions = [];
  }

  return (
    <>
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
            <RobotIcon className={"chat-message-icon robot-icon"} />
            {text}
          </>
        )}
      </div>
      {suggestions && suggestions.length > 0 && (
        <div className={"product-container"}>
          {suggestions.map((product) => (
            <Product
              key={product.id}
              productItem={product}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default ChatMessage;
