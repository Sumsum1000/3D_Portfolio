import React, { useState } from "react";

export const closeupContext = React.createContext({
  closeup: "",
  setCloseup: () => {},
  type: "img",
  setType: () => {},
});

export const CloseupProvider = ({ children }) => {
  const [closeup, setCloseup] = useState({});
  const [type, setType] = useState("img");

  return (
    <closeupContext.Provider
      value={{
        closeup,
        setCloseup,
        type,
        setType,
      }}
    >
      {children}
    </closeupContext.Provider>
  );
};
