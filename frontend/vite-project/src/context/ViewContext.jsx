import { createContext, useState } from "react";

export const ViewContext = createContext();

export function ViewProvider({ children }) {
  const [view, setView] = useState("desktop");

  return (
    <ViewContext.Provider value={{ view, setView }}>
      {children}
    </ViewContext.Provider>
  );
}