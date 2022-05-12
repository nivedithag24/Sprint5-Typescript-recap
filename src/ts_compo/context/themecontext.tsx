// Step1 :we create a new context

import React, { createContext } from "react";
import { theme } from "./theme";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext(theme);

// step2 : We create the theme context provider

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};


// step3 : we wrap the box component with the provider in app.tsx(import both themecontextprovider and box).

// step4 :consume it in box.tsx (see in box.tsx file in the top)







