import React, { useState } from "react";
import { Arch_2 } from "../../Data/Architecture/Arch_2";

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
