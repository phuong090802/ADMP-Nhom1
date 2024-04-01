import { createContext } from "react";

export const CounsellorListContext = createContext();

export const CounsellorListStore = ({ children }) => {
  return (
    <CounsellorListContext.Provider value={{}}>
      {children}
    </CounsellorListContext.Provider>
  );
};
