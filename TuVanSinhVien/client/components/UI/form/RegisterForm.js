import { useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import { Colors } from '../../../constants/styles';
import IconInput from '../input/IconInput';
import IconPicker from '../input/IconPicker';
import PasswordInput from '../input/PasswordInput';

const ICON_SIZE = 24;
export default function RegisterForm({ values, onValuesChange }) {
  const fullNameInputRef = useRef();
  const phoneNumberInputRef = useRef();
  const emailInputRef = useRef();
  const occupationInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();

  const handleFocus = (ref) => {
    if (ref.current) {
      ref.current.focus();
    }
  };

  function handlePickerOnChange(value) {
    handleInputChange('occupation', value);
  }

  function handleInputChange(identified, enteredValue) {
    onValuesChange(identified, enteredValue);
  }

  return (
    <View style={styles.rootContainer}>
      <IconInput
        placeholder='Họ & Tên'
        placeholderTextColor={Colors.black50}
        inputMode='text'
        textContentType='name'
        returnKeyType='next'
        autoCapitalize='words'
        ref={fullNameInputRef}
        value={values.fullName}
        onChangeText={handleInputChange.bind(this, 'fullName')}
        onSubmitEditing={handleFocus.bind(this, phoneNumberInputRef)}
      >
        <MaterialCommunityIcons
          name='badge-account-horizontal-outline'
          size={ICON_SIZE}
          color={Colors.black75}
        />
      </IconInput>

      <IconInput
        autoCapitalize='none'
        placeholder='Số điện thoại'
        placeholderTextColor={Colors.black50}
        inputMode='tel'
        textContentType='telephoneNumber'
        ref={phoneNumberInputRef}
        returnKeyType='next'
        maxLength={10}
        value={values.phoneNumber}
        onChangeText={handleInputChange.bind(this, 'phoneNumber')}
        onSubmitEditing={handleFocus.bind(this, emailInputRef)}
      >
        <MaterialCommunityIcons
          name='phone-outline'
          size={ICON_SIZE}
          color={Colors.black75}
          onPress={() => handleFocus(phoneNumberInputRef)}
        />
      </IconInput>

      <IconInput
        autoCapitalize='none'
        placeholder='Email'
        placeholderTextColor={Colors.black50}
        inputMode='email'
        textContentType='name'
        ref={emailInputRef}
        returnKeyType='next'
        value={values.email}
        onChangeText={handleInputChange.bind(this, 'email')}
        onSubmitEditing={handleFocus.bind(this, occupationInputRef)}
      >
        <MaterialCommunityIcons
          name='email-outline'
          size={ICON_SIZE}
          color={Colors.black75}
        />
      </IconInput>

      <IconPicker
        values={values.occupation}
        onChange={handlePickerOnChange}
        options={['Sinh viên', 'Cựu sinh viên', 'Phụ huynh', 'Học sinh']}
      >
        <MaterialIcons
          name='work-outline'
          size={ICON_SIZE}
          color={Colors.black75}
        />
      </IconPicker>

      <PasswordInput
        autoCapitalize='none'
        placeholder='Mật khẩu'
        placeholderTextColor={Colors.black50}
        textContentType='newPassword'
        ref={passwordInputRef}
        returnKeyType='next'
        value={values.password}
        onChangeText={handleInputChange.bind(this, 'password')}
        onSubmitEditing={handleFocus.bind(this, confirmPasswordInputRef)}
      />

      <PasswordInput
        autoCapitalize='none'
        placeholder='Nhập mật khẩu'
        placeholderTextColor={Colors.black50}
        textContentType='password'
        ref={confirmPasswordInputRef}
        returnKeyType='done'
        value={values.confirmPassword}
        onChangeText={handleInputChange.bind(this, 'confirmPassword')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
