import React, { createContext, useState, useCallback } from "react";

export const GlobalContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const updateCursorPosition = useCallback(
    (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    },
    [setCursorPos]
  );

  const contextValues = {
    cursorPos,
    updateCursorPosition,
    setCursorPos,
  };

  return (
    <GlobalContext.Provider value={contextValues}>
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;
