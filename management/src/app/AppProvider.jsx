import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createHeader } from "../util/service.util";
import { getMeSv } from "../service/author/author.sv";
import { router } from "expo-router";
import { paths } from "../../constance";
export const AppContext = createContext({
  saveUserData: (userData) => {},
  user: Object,
  isLoggedIn: Boolean,
  deleteUserData: Function,
});

const AppProvider = ({ children }) => {
  const initUser = {
    _id: null,
    avatar: null,
    department: null,
    email: null,
    fullName: null,
    phoneNumber: null,
    role: "GUEST",
  };

  const [user, setUser] = useState(initUser);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getMe = async () => {
    try {
      const response = await getMeSv();
      saveUserData(response.user);
      router.push(paths.dashboard);
    } catch (error) {
      router.push(paths.login);
    }
  };

  useEffect(() => {
    getMe();
  }, []);

  const saveUserData = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  const deleteUserData = async () => {
    await AsyncStorage.removeItem("accessToken");
    setUser(initUser);
    setIsLoggedIn(false);
  };

  return (
    <AppContext.Provider
      value={{ user, isLoggedIn, saveUserData, deleteUserData }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
