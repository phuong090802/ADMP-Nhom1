import React, { useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import MyButton from "../../../component/atomic/my-button";
import { AppContext } from "../../AppProvider";
import { router } from "expo-router";
import { colors, fonts, paths } from "../../../../constance";
import blank_avatar from "../../../../assets/images/blank_avatar.jpg";

const User = () => {
  const { deleteUserData, user } = useContext(AppContext);
  console.log(user);
  return (
    <View style={styles.container}>
      <View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={user.avatar === null ? blank_avatar : { uri: user.avatar }}
            style={{ width: 100, height: 100, borderRadius: 16 }}
          />
        </View>
        <View style={styles.inforBox}>
          <Infor label={"Họ & Tên"} text={user.fullName} />
          <Infor label={"Email"} text={user.email} />
          <Infor label={"Số điện thoại"} text={user.phoneNumber} />
          {user?.department && (
            <Infor label={"Khoa"} text={user.department.departmentName} />
          )}
          <Infor label={"Chức vụ"} text={user.role} />
        </View>
      </View>
      <MyButton
        buttonText={"Đăng xuất"}
        onPress={() => {
          deleteUserData();
          setTimeout(() => {
            router.replace(paths.login);
          }, 1000);
        }}
        style={{ marginTop: 16 }}
      />
    </View>
  );
};

const Infor = ({ label, text }) => {
  return (
    <View style={{ flexDirection: "row", width: "100%", gap: 4 }}>
      <Text
        style={{
          fontFamily: fonts.BahnschriftBold,
          fontSize: 18,
          color: colors.black75,
        }}
      >
        {label || "label"}:
      </Text>
      <Text
        style={{
          fontFamily: fonts.BahnschriftRegular,
          fontSize: 18,
          color: colors.black75,
        }}
      >
        {text || "text"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 16 },
  inforBox: {
    padding: 16,
    borderWidth: 1,
    marginTop: 16,
    borderRadius: 16,
    borderColor: colors.primary,
    gap: 16,
  },
});

export default User;
