import { Text, View } from "react-native";
import Octicon from "../../../atom/octicon";
import { colors, fonts } from "../../../../constant";
import {  dropdownContentStyle } from "./const";

const QuestionBox = () => {
  return (
    <View style={dropdownContentStyle.container}>
      <Octicon name={"comment"} size={24} color={colors.primary} />
      <View style={{ width: "85%" }}>
        <Text style={dropdownContentStyle.title}>
          Câu hỏi
        </Text>
        <Text
          style={dropdownContentStyle.content}
        >
          Dạ cho em được hỏi, em có nộp chứng chỉ Toeic để quy đổi điểm và ở mục
          miễn thi AVDR em có quên tick vào. Vậy liệu có ảnh hưởng gì không ạ.
        </Text>
      </View>
    </View>
  );
};

export default QuestionBox
