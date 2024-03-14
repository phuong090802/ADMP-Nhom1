import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from "@expo/vector-icons";

const MyIcon = ({ name, size, color, iconPackage }) => {
  let icon;
  switch (iconPackage) {
    case "AntDesign":
      icon = <AntDesign name={name} size={size} color={color} />;
      break;
    case "Entypo":
      icon = <Entypo name={name} size={size} color={color} />;
      break;
    case "EvilIcons":
      icon = <EvilIcons name={name} size={size} color={color} />;
      break;
    case "Feather":
      icon = <Feather name={name} size={size} color={color} />;
      break;
    case "FontAwesome":
      icon = <FontAwesome name={name} size={size} color={color} />;
      break;
    case "FontAwesome5":
      icon = <FontAwesome5 name={name} size={size} color={color} />;
      break;
    case "FontAwesome6":
      icon = <FontAwesome6 name={name} size={size} color={color} />;
      break;
    case "Fontisto":
      icon = <Fontisto name={name} size={size} color={color} />;
      break;
    case "Foundation":
      icon = <Foundation name={name} size={size} color={color} />;
      break;
    case "Ionicons":
      icon = <Ionicons name={name} size={size} color={color} />;
      break;
    case "MaterialCommunityIcons":
      icon = <MaterialCommunityIcons name={name} size={size} color={color} />;
      break;
    case "MaterialIcons":
      icon = <MaterialIcons name={name} size={size} color={color} />;
      break;
    case "Octicons":
      icon = <Octicons name={name} size={size} color={color} />;
      break;
    case "SimpleLineIcons":
      icon = <SimpleLineIcons name={name} size={size} color={color} />;
      break;
    case "Zocial":
      icon = <Zocial name={name} size={size} color={color} />;
      break;

    default:
      break;
  }

  return icon
};

export default MyIcon;
