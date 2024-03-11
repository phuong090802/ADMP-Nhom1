import { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { colors, fonts } from "../../../constant";
import MaterialIcon from "../material-icon";

const MySelect = ({ name, data, onChange, defaultOption }) => {
  const handleSelect = useCallback(
    (value) => {
      if (!onChange || !name) return;
      onChange(name, value);
    },
    [onChange]
  );

  return (
    <View>
      <SelectList
        setSelected={(value) => handleSelect(value)}
        data={data}
        save="value"
        boxStyles={style.boxStyles}
        inputStyles={style.inputStyles}
        dropdownStyles={style.dropdownStyles}
        defaultOption={defaultOption || {}}
      />
      <View style={style.icon}>
        <MaterialIcon name={"work-outline"} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  icon: {
    position: "absolute",
    height: 44,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    left: 9,
  },
  boxStyles: {
    backgroundColor: "#fff",
    height: 44,
    borderWidth: 1,
    borderColor: colors.black10,
    borderRadius: 16,
    marginTop: 0,
    paddingLeft: 40,
  },
  inputStyles: {
    fontFamily: fonts.BahnschriftRegular,
    fontSize: 16,
    color: colors.black75,
  },
  dropdownStyles: {
    backgroundColor: "#fff",
  },
});

export default MySelect;
