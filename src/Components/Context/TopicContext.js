import React, { useState } from "react";

export const TopicContext = React.createContext({
  topic: "",
  setTopic: () => {},
});

export const TopicProvider = ({ children }) => {
  const [topic, setTopic] = useState("");

  return (
    <TopicContext.Provider
      value={{
        topic,
        setTopic,
      }}
    >
      {children}
    </TopicContext.Provider>
  );
};
