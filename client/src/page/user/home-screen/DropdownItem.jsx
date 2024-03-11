import { Image, Text, View } from "react-native";
import { dropdownItemStyle } from "./const";
import IconButton from "../../../atom/icon-button";
import user_avatar from "../../../../assets/img/user_avatar.jpg";
import Octicon from "../../../atom/octicon";
import QuestionBox from "./QuestionBox";
import AnswerBox from "./AnswerBox";
import { useCallback } from "react";

const DropdownItem = ({ id, isOpen, onSelect }) => {

  const handleSelect = useCallback(()=>{
    if(onSelect) onSelect()
  },[onSelect])

  return (
    <View style={dropdownItemStyle.container}>
      <View style={dropdownItemStyle.header}>
        <View style={dropdownItemStyle.questionInfor}>
          <Text style={dropdownItemStyle.title}>
            Thắc mắc về nộp chứng chỉ Toeic để quy đổi điểm
          </Text>
          <View style={dropdownItemStyle.inforContainer}>
            <Image source={user_avatar} style={dropdownItemStyle.authorImage} />
            <Text style={dropdownItemStyle.inforText}>Trần Thanh Phương</Text>
            <Octicon name={"clock"} size={16} />
            <Text style={dropdownItemStyle.inforText}>11/03/2024</Text>
            <Octicon name={"eye"} size={16} />
            <Text style={dropdownItemStyle.inforText}>120</Text>
          </View>
        </View>
        <View style={dropdownItemStyle.icon}>
          <IconButton
            iconName={"triangle-down"}
            iconColor={"#fff"}
            iconSize={20}
            onClick={handleSelect}
          />
        </View>
      </View>
      <View
        style={[
          dropdownItemStyle.dropDownContainer,
          isOpen ? dropdownItemStyle.open : dropdownItemStyle.close,
        ]}
      >
        <QuestionBox />
        <AnswerBox />
      </View>
    </View>
  );
};

export default DropdownItem;
