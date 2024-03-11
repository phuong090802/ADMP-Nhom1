import { createContext, useState } from "react";
import { initUSer } from "./const";

export const DataContext = createContext();

const Store = ({ children }) => {
  const [user, setUser] = useState(initUSer);

  const clearUserData = () => {
    setUser(initUSer);
  };
  return (
    <DataContext.Provider value={{ user, setUser, clearUserData }}>
      {children}
    </DataContext.Provider>
  );
};

export default Store;
