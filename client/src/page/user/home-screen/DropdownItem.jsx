import { useCallback, useContext } from "react";
import { Image, Text, View } from "react-native";
import user_avatar from "../../../../assets/img/user_avatar.jpg";
import IconButton from "../../../atom/icon-button";
import Octicon from "../../../atom/octicon";
import { dateTimeToDate } from "../../../util/convert.util";
import AnswerBox from "./AnswerBox";
import QuestionBox from "./QuestionBox";
import { dropdownItemStyle } from "./const";

const DropdownItem = ({ data, isOpen, onSelect }) => {

  const handleSelect = useCallback(() => {
    if (onSelect) onSelect();
  }, [onSelect]);

  return (
    data.user && (
      <>
        <View style={dropdownItemStyle.container}>
          <View style={dropdownItemStyle.header}>
            <View style={dropdownItemStyle.questionInfor}>
              <Text style={dropdownItemStyle.title}>{data.title}</Text>
              <View style={dropdownItemStyle.inforContainer}>
                <Image
                  source={
                    data?.user.avatar ? { uri: data.user.avatar } : user_avatar
                  }
                  style={dropdownItemStyle.authorImage}
                />
                <Text style={dropdownItemStyle.inforText}>
                  {data.user.fullName}
                </Text>
                <Octicon name={"clock"} size={16} />
                <Text style={dropdownItemStyle.inforText}>
                  {dateTimeToDate(data.createdAt)}
                </Text>
                <Octicon name={"eye"} size={16} />
                <Text style={dropdownItemStyle.inforText}>{data.views}</Text>
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
            <QuestionBox content={data.content} />
            <AnswerBox data={data.answer} />
          </View>
        </View>
      </>
    )
  );
};

export default DropdownItem;
