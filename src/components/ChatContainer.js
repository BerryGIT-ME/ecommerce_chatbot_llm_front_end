import ChatMessage from "./ChatMessage";
const testMessages = [
  {
    chat: {
      role: "assistant",
      content: "Hi there, how can I assist you find the right product",
    },
    products: [],
  },
  {
    chat: {
      role: "user",
      content: "Thanks I'd like to know more if you have some red gucci bags",
    },
    products: [],
  },
  {
    chat: {
      role: "asssitant",
      content:
        "Sure here are some of what we have at the moment, Added to see effect of more text. Sure here are some of what we have at the moment",
    },
    products: [
      {
        name: "Gucci bag",
        price: 2000,
        image: "https://images.unsplash.com/photo-1682687220499-d9c06b872eee",
      },
      {
        name: "Gucci bag2",
        price: 2000,
        image:
          "https://plus.unsplash.com/premium_photo-1698524748767-02132ca18c68",
      },
    ],
  },
];

function ChatContanier() {
  return (
    <div className="chat-container">
      {testMessages.map((message, index) => (
        <ChatMessage
          chatItem={message}
          key={index}
        />
      ))}
      <div style={{ margin: "1rem 0rem" }}>
        <form className="form-style">
          <textarea
            // row={4}
            autoFocus
            className="input-style"
            type="text"
            placeholder="Chat with our store assistant e.g What are some top products right now"
          />
          <div className="input-btns-container">
            <button>send</button>
            <button>upload pic</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChatContanier;
