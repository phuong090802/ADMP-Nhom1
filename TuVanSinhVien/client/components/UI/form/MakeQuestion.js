import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

import { Colors } from '../../../constants/styles';
import departments from '../../../data/departments';
import fields from '../../../data/fields';
import UnderlinePicker from '../input/UnderlinePicker';
import IconInput from '../input/IconInput';
import TextIconMultiline from '../input/TextIconMultiline';

const ICON_SIZE = 24;
export default function MakeQuestion() {
  return (
    <>
      <UnderlinePicker
        style={styles.spaceBetween}
        label='Khoa:'
        options={departments}
        placeHolder='Chọn khoa'
        name='departmentName'
      />
      <UnderlinePicker
        style={styles.spaceBetween}
        label='Lĩnh vực:'
        options={fields}
        placeHolder='Chọn lĩnh vực'
        name='fieldName'
      />
      <IconInput
        style={styles.spaceBetween}
        placeholder='Tiêu đề'
        placeholderTextColor={Colors.black50}
        inputMode='text'
        textContentType='none'
        returnKeyType='next'
        autoCapitalize='words'
        // value={values.fullName}
        // onChangeText={handleInputChange.bind(this, 'fullName')}
        // onSubmitEditing={handleFocus.bind(this, phoneNumberInputRef)}
      >
        <MaterialCommunityIcons
          name='format-title'
          size={ICON_SIZE}
          color={Colors.black75}
        />
      </IconInput>
      <TextIconMultiline
        style={styles.spaceBetween}
        placeholder='Nội dung câu hỏi'
        placeholderTextColor={Colors.black50}
        inputMode='text'
        textContentType='none'
        returnKeyType='next'
        autoCapitalize='words'
        multiline
        numberOfLines={12}
        // ref={fullNameInputRef}
        // value={values.fullName}
        // onChangeText={handleInputChange.bind(this, 'fullName')}
        // onSubmitEditing={handleFocus.bind(this, phoneNumberInputRef)}
      >
        <MaterialCommunityIcons
          name='border-color'
          size={ICON_SIZE}
          color={Colors.black75}
        />
      </TextIconMultiline>
    </>
  );
}

const styles = StyleSheet.create({
  spaceBetween: {
    marginVertical: 8,
  },
});
