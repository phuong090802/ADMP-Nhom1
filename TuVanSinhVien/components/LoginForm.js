import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRef } from 'react';

import { Colors, ICON_SIZE } from '../constants/styles';
import IconInput from './UI/input/IconInput';
import PasswordInput from './UI/input/PasswordInput';

export default function LoginForm({ values, onChangeValues }) {
  const phoneNumberInputRef = useRef();
  const passwordInputRef = useRef();

  const handleFocus = (ref) => {
    if (ref.current) {
      ref.current.focus();
    }
  };

  function handleInputChange(identified, enteredValue) {
    onChangeValues(identified, enteredValue);
  }

  return (
    <>
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
        onSubmitEditing={handleFocus.bind(this, passwordInputRef)}
      >
        <MaterialCommunityIcons
          name='phone-outline'
          size={ICON_SIZE}
          color={Colors.black75}
          onPress={() => handleFocus(passwordInputRef)}
        />
      </IconInput>

      <PasswordInput
        autoCapitalize='none'
        placeholder='Mật khẩu'
        placeholderTextColor={Colors.black50}
        textContentType='newPassword'
        ref={passwordInputRef}
        value={values.password}
        onChangeText={handleInputChange.bind(this, 'password')}
      />
    </>
  );
}
