import { Text, View } from "react-native";
import Octicon from "../../../atom/octicon";
import { colors, fonts } from "../../../../constant";
import { dropdownContentStyle } from "./const";

const QuestionBox = ({ content }) => {
  return (
    <View style={dropdownContentStyle.container}>
      <Octicon name={"comment"} size={24} color={colors.primary} />
      <View style={{ width: "85%" }}>
        <Text style={dropdownContentStyle.title}>Câu hỏi</Text>
        <Text style={dropdownContentStyle.content}>{content}</Text>
      </View>
    </View>
  );
};

export default QuestionBox;
