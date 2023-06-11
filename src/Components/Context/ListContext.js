import React, { useState } from "react";

export const listContext = React.createContext({
  list: [],
  setList: () => {},
});

export const ListProvider = ({ children }) => {
  const [list, setList] = useState([]);

  return (
    <listContext.Provider
      value={{
        list,
        setList,
      }}
    >
      {children}
    </listContext.Provider>
  );
};
