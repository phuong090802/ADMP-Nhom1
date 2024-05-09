import React, { createRef, useContext, useRef, useState } from "react";
import { CounsellorQuestionContext } from "./CounsellorQuestionProvider";
import {
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ToastAndroid,
} from "react-native";
import MyIcon from "../../../component/atomic/my-icon";
import { colors, fonts } from "../../../../constance";
import MyRichText from "../../../component/atomic/my-rich-text/MyRichText";
import { useAuthSocket } from "../../../hooks/useAuthSocket";
import Checkbox from "expo-checkbox";

export const AnswerQuestionModal = () => {
  const { showAnswerModal, setShowAnswerModal, selectedQuestion } = useContext(
    CounsellorQuestionContext
  );

  const { authSocket } = useAuthSocket();

  const initAnswerData = {
    questionId: "",
    content: "",
    isApprovalRequest: false,
  };

  const [answerData, setAnswerData] = useState(initAnswerData);

  const answerQuestion = async () => {
    if (!authSocket) return;
    console.log("answerQuestion");
    try {
      console.log({
        ...answerData,
        questionId: selectedQuestion._id,
      });
      const response = await authSocket.emitWithAck("answer:create", {
        ...answerData,
        questionId: selectedQuestion._id,
      });
      ToastAndroid.show(
        response.message || "Phản hôi câu hỏi thành công",
        ToastAndroid.SHORT
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const onHtmlChange = (html) => {
    setAnswerData((prev) => ({ ...prev, content: html.html }));
    console.log(html);
  };

  const _editor = createRef();

  return (
    <Modal visible={showAnswerModal} transparent animationType="fade">
      <View style={styles.container}>
        <View style={styles.content}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderBottomWidth: 2,
              paddingBottom: 8,
              paddingHorizontal: 16,
            }}
          >
            <View></View>
            <Text style={styles.title}>Phản hồi</Text>
            <TouchableOpacity
              activeOpacity={0.4}
              onPress={() => setShowAnswerModal(false)}
            >
              <MyIcon
                iconPackage="Fontisto"
                name={"close"}
                size={32}
                color={colors.black75}
              />
            </TouchableOpacity>
          </View>
          <View style={{ borderBottomWidth: 1 }}>
            <MyRichText editorRef={_editor} setValue={onHtmlChange} />
          </View>
          <View
            style={{
              flexDirection: "row-reverse",
              alignItems: "center",
              gap: 8,
              padding: 8,
            }}
          >
            <Checkbox
              value={answerData.isApprovalRequest}
              onValueChange={(value) =>
                setAnswerData((prev) => ({ ...prev, isApprovalRequest: value }))
              }
            />
            <Text style={styles.text}>Duyệt:</Text>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row-reverse",
              gap: 8,
              padding: 8,
            }}
          >
            <TouchableOpacity
              style={[styles.button, { backgroundColor: colors.success }]}
              onPress={answerQuestion}
            >
              <Text style={[{ color: colors.white }, styles.regular]}>
                Phản hồi
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    backgroundColor: colors.white,
    paddingTop: 16,
    borderRadius: 8,
    width: "80%",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontFamily: fonts.BahnschriftBold,
    fontSize: 22,
    color: colors.black75,
  },
  option: {
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: fonts.BahnschriftRegular,
    fontSize: 18,
    color: colors.black75,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
});
