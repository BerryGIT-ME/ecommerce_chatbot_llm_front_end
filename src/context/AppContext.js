import { useState, createContext, useContext } from "react";

const AppContext = createContext();

const testMessages = [
  {
    chat: {
      role: "user",
      content: "Thanks I'd like to know more if you have some red gucci bags",
    },
    suggestions: [],
  },
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
      content:
        "Thanks I'd like to know more if you have some red gucci bagsThe left is overwritten by right. That means the “Presentation Attributes” are overwritten by all other styles except the “User Agent Styles”.Now if we go back to the question above, the width and height of SVG count as low-level “author style sheets” like the “Presentation Attributes”.That’s why it is overwritten by other styles including the external styles",
    },
    suggestions: [],
  },
  {
    chat: {
      role: "assistant",
      content:
        "Thanks I'd like to know more if you have some red gucci bagsThe left is overwritten by right. That means the “Presentation Attributes” are overwritten by all other styles except the “User Agent Styles”.Now if we go back to the question above, the width and height of SVG count as low-level “author style sheets” like the “Presentation Attributes”.That’s why it is overwritten by other styles including the external styles",
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

export function AppContextProvider({ children }) {
  const [chats, setChats] = useState(testMessages);

  const value = {
    chats,
    setChats,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const value = useContext(AppContext);
  return value;
}
