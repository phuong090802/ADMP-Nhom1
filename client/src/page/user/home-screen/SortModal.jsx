import { useContext, useState } from "react";
import ModalLayout from "../../../template/modal-layout/ModalLayout";
import { HomeContext } from "./HomeScreen";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MySelect from "../../../molecule/my-select";
import { colors, fonts } from "../../../../constant";
import MyIcon from "../../../atom/my-icon";
import MyButton from "../../../atom/my-button";

const SortModal = () => {
  const { sortVisible, setSortVisible, params, setParams } =
    useContext(HomeContext);
  const [tempSort, setTempSort] = useState({ ...params.sort });

  const handleViewsSort = () => {
    setTempSort({ ...tempSort, views: tempSort.views === 1 ? -1 : 1 });
  };

  const handleDateSort = () => {
    setTempSort({ ...tempSort, createdAt: tempSort.createdAt === 1 ? -1 : 1 });
  };

  const submit = () => {
    setParams((prev) => ({ ...prev, sort: tempSort }));
    setSortVisible(false)
  };

  return (
    <ModalLayout
      visible={sortVisible}
      onClose={() => setSortVisible(false)}
      title={"Sắp xếp"}
    >
      <View style={{ gap: 24, width: "100%" }}>
        <View style={style.viewStyle}>
          <Text style={style.textStyle}>Lượt xem:</Text>
          <TouchableOpacity
            onPress={handleViewsSort}
            style={{ flexDirection: "row" }}
          >
            <Text style={style.textStyle}>
              {tempSort.views === 1 ? "Tăng dần" : "Giảm dần"}
            </Text>
            <MyIcon
              iconPackage={"Octicons"}
              name={tempSort.views === 1 ? "sort-asc" : "sort-desc"}
              color={colors.black75}
              size={24}
            />
          </TouchableOpacity>
        </View>

        <View style={style.viewStyle}>
          <Text style={style.textStyle}>Ngày đăng:</Text>
          <TouchableOpacity
            onPress={handleDateSort}
            style={{ flexDirection: "row" }}
          >
            <Text style={style.textStyle}>
              {tempSort.createdAt === 1 ? "Tăng dần" : "Giảm dần"}
            </Text>
            <MyIcon
              iconPackage={"Octicons"}
              name={tempSort.createdAt === 1 ? "sort-asc" : "sort-desc"}
              color={colors.black75}
              size={24}
            />
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <MyButton title={"Sắp xếp"} onPress={submit} />
        </View>
      </View>
    </ModalLayout>
  );
};

const style = StyleSheet.create({
  viewStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  textStyle: { fontSize: 18, fontFamily: fonts.BahnschriftRegular },
});

export default SortModal;
