import { StyleSheet, View } from "react-native";
import { colors } from "../../../constant";
import Octicon from "../octicon/Octicon";

const IconButton = ({ iconName, iconColor, iconSize, buttonColor }) => {
  const buttonColorStyle = { backgroundColor: buttonColor || colors.primary };
  return (
    <View style={[style.button, buttonColorStyle]}>
      <Octicon name={iconName} size={iconSize} color={iconColor} />
    </View>
  );
};

const style = StyleSheet.create({
  button: {
    width: 30,
    height: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
});

export default IconButton;
