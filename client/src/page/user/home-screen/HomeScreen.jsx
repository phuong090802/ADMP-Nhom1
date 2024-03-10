import { ScrollView, Text, View } from "react-native";
import { style } from "./const";
import QuestionBox from "./QuestionBox";
import TitleBar from "../../../molecule/title-bar";

const HomeScreen = () => {
  return (
    <View style= {style.container}>
      <TitleBar />
      <ScrollView style={{marginTop: 8}} showsVerticalScrollIndicator={false}>
        <QuestionBox />
        <QuestionBox />
        <QuestionBox />
        <QuestionBox />
        <QuestionBox />
        <QuestionBox />
        <QuestionBox />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
