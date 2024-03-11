import { Image, Text, TouchableOpacity, View } from "react-native";
import user_avatar from "../../../assets/img/user_avatar.jpg";
import { headerStyle } from "./const";
import Octicon from "../../atom/octicon";
import { useContext, useEffect, useState } from "react";
import MyButton from "../../atom/my-button";
import { colors } from "../../../constant";
import { useNavigation } from "@react-navigation/native";
import { DataContext } from "../../store/Store";
import { getMeSv } from "../../service/guest/author.sv";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Header = () => {
  const { user, setUser, clearUserData } = useContext(DataContext);
  const navigation = useNavigation();

  const getMe = async () => {
    try {
      const response = await getMeSv();
      setUser({ ...response.user, isLoggedIn: true });
    } catch (error) {
      await AsyncStorage.clear();
      clearUserData();
    }
  };

  const logOut = async () => {
    await AsyncStorage.clear();
    clearUserData();
  };

  useEffect(() => {
    getMe();
  }, []);

  return (
    <View style={headerStyle.container}>
      <View style={headerStyle.userInforContainer}>
        <View style={headerStyle.avatarContainer}>
          <Image
            source={user.avatar || user_avatar}
            style={headerStyle.avatar}
          />
        </View>
        <Text style={headerStyle.text}>
          {user.fullName ? user.fullName : "Xin chào bạn!!!"}
        </Text>
      </View>
      <View style={headerStyle.function}>
        {user.isLoggedIn ? (
          <>
            <TouchableOpacity>
              <Octicon name={"comment-discussion"} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Octicon name={"bell"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={logOut}>
              <Octicon name={"sign-out"} />
            </TouchableOpacity>
          </>
        ) : (
          <MyButton
            title={"Đăng nhập"}
            color={colors.secondary}
            onPress={() => navigation.navigate("Login")}
          />
        )}
      </View>
    </View>
  );
};

export default Header;
