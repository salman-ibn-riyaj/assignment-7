'use client'
import { InteractionProvider } from "@/context/InteractionContext";
import React from "react";

const Providers = ({ children }) => {
  return <InteractionProvider>{children}</InteractionProvider>;
};

export default Providers;
