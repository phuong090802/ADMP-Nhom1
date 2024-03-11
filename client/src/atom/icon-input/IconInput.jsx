import { useCallback } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { colors, fonts } from "../../../constant";
import MaterialIcon from "../material-icon";

const IconInput = ({
  name,
  icon,
  iconColor,
  iconSize,
  placeholder,
  keyboardType,
  secureTextEntry,
  onChange,
  value,
}) => {
  const handleTextChange = useCallback(
    (text) => {
      if (!name || !onChange) return;
      onChange(name, text);
    },
    [onChange, name]
  );

  return (
    <View style={style.container}>
      <View style={style.icon}>
        <MaterialIcon
          name={icon}
          size={iconSize || 24}
          color={iconColor || "#000"}
        />
      </View>
      <TextInput
        style={style.iconInput}
        placeholder={placeholder || ""}
        keyboardType={keyboardType || "default"}
        secureTextEntry={secureTextEntry}
        defaultValue={value}
        onChangeText={(newText) => handleTextChange(newText)}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    borderWidth: 1,
    borderColor: colors.black10,
    borderRadius: 16,
    overflow: "hidden",
  },
  icon: {
    height: 44,
    display: "flex",
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 8,
  },
  iconInput: {
    flex: 1,
    height: 44,
    backgroundColor: "#fff",
    fontFamily: fonts.BahnschriftRegular,
    fontSize: 16,
  },
});

export default IconInput;
