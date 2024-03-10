import { LinearGradient } from "expo-linear-gradient";
import { Text } from "react-native";
import { style } from "./const";
import { Octicons } from "@expo/vector-icons";

const TitleBar = () => {
  return (
    <LinearGradient
      colors={["#2785DC", "#1DDBD2"]}
      start={[0, 0]}
      end={[1, 0]}
      style={style.container}
    >
      <Text style={style.title}>Hỏi đáp</Text>
      <Octicons name="search" color={'#fff'} size={24}/>
    </LinearGradient>
  );
};

export default TitleBar;
