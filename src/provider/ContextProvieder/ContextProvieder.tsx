"use client";
import React, { ReactNode, createContext, useState } from "react";

type ContextValueType = {
    setShowBar: React.Dispatch<React.SetStateAction<boolean>>;
    showBar: boolean;
};
export const StateContext = createContext<ContextValueType>({ setShowBar: () => { }, showBar: false })

const ContextProvieder: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [showBar, setShowBar] = useState<boolean>(true)

    const contextValue = {
        showBar,
        setShowBar
    }

    return (
        <StateContext.Provider value={contextValue}>
            {children}
        </StateContext.Provider>
    );
};

export default ContextProvieder;