import { useContext } from "react";
import ModalLayout from "../../../component/molecule/modal-layout";
import { DepheadCounsellorContext } from "./DepheadCounsellorProvider";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors, fonts } from "../../../../constance";
import blank_avatar from "../../../../assets/images/blank_avatar.jpg";

export const CounsellorDetailModal = () => {
  const {
    showCounsellorDetailModal,
    setShowCounsellorDetailModal,
    selectedCounsellor,
  } = useContext(DepheadCounsellorContext);

  return (
    <ModalLayout
      title={"Thông tin tư vấn viên"}
      visible={showCounsellorDetailModal}
      onClose={() => setShowCounsellorDetailModal(false)}
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
                selectedCounsellor?.avatar === null
                  ? blank_avatar
                  : { uri: selectedCounsellor.avatar }
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
            {selectedCounsellor?.fullName || "Tên người dùng"}
          </Text>
        </View>
        <View style={styles.infor}>
          <Text style={[styles.text, { fontFamily: fonts.BahnschriftBold }]}>
            Email:
          </Text>
          <Text style={styles.text}>
            {selectedCounsellor?.email || "Email người dùng"}
          </Text>
        </View>
        <View style={styles.infor}>
          <Text style={[styles.text, { fontFamily: fonts.BahnschriftBold }]}>
            Số điện thoại:
          </Text>
          <Text style={styles.text}>
            {selectedCounsellor?.phoneNumber || "Số điện thoại"}
          </Text>
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
