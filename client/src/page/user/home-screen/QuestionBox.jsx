import { Image, Text, View } from "react-native";
import { questionBoxStyle, style } from "./const";
import IconButton from "../../../atom/icon-button";
import user_avatar from "../../../../assets/img/user_avatar.jpg";
import Octicon from "../../../atom/octicon";

const QuestionBox = () => {
  return (
    <View style={questionBoxStyle.container}>
      <View style={questionBoxStyle.header}>
        <View style={questionBoxStyle.questionInfor}>
          <Text style={questionBoxStyle.title}>
            Thắc mắc về nộp chứng chỉ Toeic để quy đổi điểm
          </Text>
          <View style={questionBoxStyle.inforContainer}> 
            <Image source={user_avatar} style={questionBoxStyle.authorImage}/>
            <Text style={questionBoxStyle.inforText}>Trần Thanh Phương</Text>
            <Octicon name={'clock'} size={16}/>
            <Text style={questionBoxStyle.inforText}>11/03/2024</Text>
            <Octicon name={'eye'} size={16}/>
            <Text style={questionBoxStyle.inforText}>120 views</Text>
          </View>
        </View>
        <View style={questionBoxStyle.icon}>
          <IconButton
            iconName={"triangle-down"}
            iconColor={"#fff"}
            iconSize={20}
          />
        </View>
      </View>
      {/* <View>
        <Text>Body</Text>
      </View> */}
    </View>
  );
};

export default QuestionBox;
