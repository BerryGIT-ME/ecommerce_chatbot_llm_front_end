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
    suggestions: [
      {
        product_id: 5,
        name: 'Tecno Spark 10c 6.6" 4GB RAM/128GB ROM Android 13 Black',
        description:
          "The phone has a 5000mAh battery and runs on the Android v12 operating system, which offers you speedier updates. This allows you to enjoy watching movies, playing games, and doing a lot more on a single full charge. A 6.6 inches (16.76 cm) display that has a resolution of 720\u2009x\u20091612\u2009pixels. ",
        price: "₦ 97,800",
        stock_quantity: 10,
        category_id: 3,
        color_id: 45,
        size_id: 7,
        product_rating: 3.4,
        product_image_url:
          "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/16/2938922/1.jpg?5082",
      },
      {
        product_id: 6,
        name: 'Samsung Galaxy A04e 6.5" 3GB RAM/64GB ROM Android 12 - Light Blue',
        description:
          "The newest Samsung Galaxy A04e runs on Android 12 with One UI Core 4.1 on top and features a 6.5-inch HD+ PLS LCD display. The display has a waterdrop-style notch at the centre to house the front camera. It is powered by an unnamed 2.3 Hz octa-core SoC, along with 3GB of RAM.",
        price: "₦ 100,250",
        stock_quantity: 10,
        category_id: 3,
        color_id: 45,
        size_id: 4,
        product_rating: 5.4,
        product_image_url:
          "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/86/6317722/1.jpg?0780",
      },
      {
        product_id: 5,
        name: 'Tecno Spark 10c 6.6" 4GB RAM/128GB ROM Android 13 Black Tecno Spark 10c 6.6" 4GB RAM/128GB ROM Android 13 BlackTecno Spark 10c 6.6" 4GB RAM/128GB ROM Android 13 Black',
        description:
          "The phone has a 5000mAh battery and runs on the Android v12 operating system, which offers you speedier updates. This allows you to enjoy watching movies, playing games, and doing a lot more on a single full charge. A 6.6 inches (16.76 cm) display that has a resolution of 720\u2009x\u20091612\u2009pixels. ",
        price: "₦ 97,800",
        stock_quantity: 10,
        category_id: 3,
        color_id: 45,
        size_id: 7,
        product_rating: 3.4,
        product_image_url:
          "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/16/2938922/1.jpg?5082",
      },
      {
        product_id: 6,
        name: 'Samsung Galaxy A04e 6.5" 3GB RAM/64GB ROM Android 12 - Light Blue',
        description:
          "The newest Samsung Galaxy A04e runs on Android 12 with One UI Core 4.1 on top and features a 6.5-inch HD+ PLS LCD display. The display has a waterdrop-style notch at the centre to house the front camera. It is powered by an unnamed 2.3 Hz octa-core SoC, along with 3GB of RAM.",
        price: "₦ 100,250",
        stock_quantity: 10,
        category_id: 3,
        color_id: 45,
        size_id: 4,
        product_rating: 5.4,
        product_image_url:
          "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/86/6317722/1.jpg?0780",
      },
    ],
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
