import { Image, Text, View } from "react-native";
import Octicon from "../../../atom/octicon";
import { colors, fonts } from "../../../../constant";
import { dropdownContentStyle } from "./const";
import user_avatar from "../../../../assets/img/user_avatar.jpg";


const AnswerBox = () => {
  return (
    <View style={dropdownContentStyle.container}>
      <Octicon name={"comment-discussion"} size={24} color={colors.primary} />
      <View style={{ width: "85%" }}>
        <Text style={dropdownContentStyle.title}>Phản hồi</Text>
        <Text style={dropdownContentStyle.content}>
          Chào em, Em liên hệ cô Hoa tại A1-202. Thân.
        </Text>
        <View style={dropdownContentStyle.authorContainer}>
            <Text style={{fontSize: 13, fontFamily:fonts.BahnschriftRegular}}>Phản hồi từ</Text>
            <Image source={user_avatar} style={dropdownContentStyle.authorImage} />
            <Text style={{fontSize: 13, fontFamily:fonts.BahnschriftRegular}}>Trần Thanh Phương</Text>
        </View>
      </View>
    </View>
  );
};

export default AnswerBox;
