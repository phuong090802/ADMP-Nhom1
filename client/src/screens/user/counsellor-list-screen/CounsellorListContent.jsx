import { StyleSheet, Text, View } from "react-native";
import TitleBar from "../../../molecule/title-bar";
import { colors } from "../../../../constant";

export const CounsellorListContent = () => {
  return (
    <View style={styles.containner}>
      <TitleBar title={"Danh sách tư vấn viên"} />
    </View>
  );
};

const styles = StyleSheet.create({
  containner: {
    flex: 1,
    backgroundColor: colors.ghostWhite,
    paddingHorizontal: 16,
    paddingTop: 8,
  },
});
