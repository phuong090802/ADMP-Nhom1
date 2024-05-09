import React, { useContext, useEffect, useState } from "react";
import ModalLayout from "../../../component/molecule/modal-layout";
import { AdminUserContext } from "./AdminUserProvider";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors, fonts } from "../../../../constance";
import blank_avatar from "../../../../assets/images/blank_avatar.jpg";

export const DetailUserModal = () => {
  const { showDetailUserModal, setShowDetailUserModal, selectUser } =
    useContext(AdminUserContext);

  useEffect(() => {
    console.log(selectUser);
  }, [selectUser]);
  return (
    <ModalLayout
      visible={showDetailUserModal}
      onClose={() => setShowDetailUserModal(false)}
      title={"Thông tin người dùng"}
    >
      <View style={styles.container}>
        <View
          style={{
            width: "100%",
            alignItems: "center",
          }}
        >
          <View
            style={{
              borderWidth: 2,
              borderRadius: 16,
              borderColor: colors.primary,
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <Image
              source={
                selectUser?.avatar === null
                  ? blank_avatar
                  : { uri: selectUser.avatar }
              }
              style={{ width: 66, height: 66 }}
            />
          </View>
        </View>
        <View style={styles.infor}>
          <Text style={[styles.text, { fontFamily: fonts.BahnschriftBold }]}>
            Họ & Tên:
          </Text>
          <Text style={styles.text}>
            {selectUser?.fullName || "Tên người dùng"}
          </Text>
        </View>
        <View style={styles.infor}>
          <Text style={[styles.text, { fontFamily: fonts.BahnschriftBold }]}>
            Email:
          </Text>
          <Text style={styles.text}>
            {selectUser?.email || "Email người dùng"}
          </Text>
        </View>
        <View style={styles.infor}>
          <Text style={[styles.text, { fontFamily: fonts.BahnschriftBold }]}>
            Số điện thoại:
          </Text>
          <Text style={styles.text}>
            {selectUser?.phoneNumber || "Số điện thoại"}
          </Text>
        </View>
        <View style={styles.infor}>
          <Text style={[styles.text, { fontFamily: fonts.BahnschriftBold }]}>
            Nghề nghiệp:
          </Text>
          <Text style={styles.text}>
            {selectUser?.occupation || "Nghề nghiệp"}
          </Text>
        </View>
        <View style={styles.infor}>
          <Text style={[styles.text, { fontFamily: fonts.BahnschriftBold }]}>
            Chức vụ:
          </Text>
          <Text style={styles.text}>{selectUser?.role || "Chức vụ"}</Text>
        </View>
      </View>
    </ModalLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    gap: 8,
    borderWidth: 0.5,
    padding: 16,
    borderRadius: 16,
  },
  infor: { flexDirection: "row", gap: 8 },
  text: { fontFamily: fonts.BahnschriftRegular, fontSize: 18 },
});
