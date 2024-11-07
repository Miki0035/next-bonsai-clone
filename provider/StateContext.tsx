"use client"
import { ContextTypeProps } from "@/types";
import React, { createContext, ReactNode, useContext, useState } from "react";
const Context = createContext<ContextTypeProps>({
  isChecked: false,
  setIsChecked: () => {},
});

export const StateContext = ({ children }: { children: ReactNode }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Context.Provider
      value={{
        isChecked,
        setIsChecked,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
