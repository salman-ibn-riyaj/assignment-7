// src/context/InteractionContext.js
"use client";
import { createContext, useContext, useState } from "react";

const InteractionContext = createContext();

export const InteractionProvider = ({ children }) => {
  const [interactions, setInteractions] = useState([]);

  const addInteraction = (type, friendName) => {
    const newInteraction = {
      type,        // "call" / "text" / "video"
      friendName,
      date: new Date().toDateString(), // "Tue Apr 14 2026"
    };
    setInteractions((prev) => [newInteraction, ...prev]);
  };

  return (
    <InteractionContext.Provider value={{ interactions, addInteraction }}>
      {children}
    </InteractionContext.Provider>
  );
};

export const useInteraction = () => useContext(InteractionContext);