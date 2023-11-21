import { useEffect } from "react";
import { sendMessage } from "./utils/api";

function App() {
  useEffect(() => {
    const messages = [
      { role: "user", content: "Can you generate sql queries?" },
    ];
    sendMessage({ messages });
  });

  return <div>hello world</div>;
}

export default App;
