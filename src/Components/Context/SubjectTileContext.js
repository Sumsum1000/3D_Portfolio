import React, { useState } from "react";

export const SubjectTileContext = React.createContext({
  subjectTile: "ABC",
  setSubjectTile: () => {},
});

export const SubjectTileProvider = ({ children }) => {
  const [subjectTile, setSubjectTile] = useState("");

  return (
    <SubjectTileContext.Provider
      value={{
        subjectTile,
        setSubjectTile,
      }}
    >
      {children}
    </SubjectTileContext.Provider>
  );
};
