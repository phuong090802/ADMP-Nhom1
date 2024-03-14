import { useCallback, useContext, useState } from "react";
import { View } from "react-native";
import { colors } from "../../../../constant";
import MyButton from "../../../atom/my-button";
import IconInput from "../../../molecule/icon-input";
import MySelect from "../../../molecule/my-select";
import ModalLayout from "../../../template/modal-layout/ModalLayout";
import { HomeContext } from "./HomeScreen";

const SearchModal = () => {
  const {
    depData,
    fieldData,
    setParams,
    searchVisible,
    setSearchVisible,
    params,
    chosenDep,
    setChosenDep,
    searchHandle,
    chosenField,
    setChosenField,
  } = useContext(HomeContext);

  const onClose = useCallback(() => {
    setSearchVisible(false);
  }, []);

  const handleDepSelect = useCallback(
    (value) => {
      setChosenDep(value === "null" ? null : value);
    },
    [setChosenDep]
  );

  const handleFieldSelect = useCallback(
    (value) => {
      setChosenField(value === "null" ? null : value);
    },
    [setChosenField]
  );

  const handleSearchChange = useCallback((value) => {
    console.log("search value", value);
    setParams((prev) => ({ ...prev, keyword: value }));
  }, []);

  const submit = useCallback(() => {
    searchHandle();
    setSearchVisible(false);
  }, [searchHandle]);

  return (
    <ModalLayout
      visible={searchVisible}
      onClose={onClose}
      title={"Tìm kiếm câu hỏi"}
    >
      <View style={{ gap: 16 }}>
        <IconInput
          iconPackage={"Ionicons"}
          icon={"search"}
          placeholder={"Từ khóa"}
          value={params.keyword || ""}
          onChange={handleSearchChange}
        />
        <MySelect
          data={depData || []}
          onChange={handleDepSelect}
          iconPackage={"Octicons"}
          iconName={"organization"}
          iconColor={colors.black75}
          placeholder={"Chọn khoa"}
          defaultOption={
            chosenDep
              ? depData.find((dep) => dep.key === chosenDep)
              : { key: null, value: "Chọn khoa" }
          }
        />
        <MySelect
          data={fieldData || []}
          onChange={handleFieldSelect}
          iconPackage={"Octicons"}
          iconName={"stack"}
          iconColor={colors.black75}
          placeholder={"Chọn lĩnh vực"}
          defaultOption={
            chosenField && fieldData
              ? fieldData.find((field) => field.key === chosenField)
              : { key: null, value: "Chọn lĩnh vực" }
          }
        />
        <View style={{}}>
          <MyButton title={"Tìm kiếm"} onPress={submit} />
        </View>
      </View>
    </ModalLayout>
  );
};

export default SearchModal;
