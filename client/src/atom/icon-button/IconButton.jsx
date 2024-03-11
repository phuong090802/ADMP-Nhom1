import { StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../../../constant";
import Octicon from "../octicon/Octicon";

const IconButton = ({
  iconName,
  iconColor,
  iconSize,
  buttonColor,
  onClick,
}) => {
  const buttonColorStyle = { backgroundColor: buttonColor || colors.primary };

  const handleClick = () => {
    if (onClick) onClick();
  };
  return (
    <TouchableOpacity
      style={[style.button, buttonColorStyle]}
      onPress={handleClick}
    >
      <Octicon name={iconName} size={iconSize} color={iconColor} />
    </TouchableOpacity>
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
