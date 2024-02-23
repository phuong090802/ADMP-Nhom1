import { useRef } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Colors } from '../../../constants/styles';
import IconInput from '../../UI/input/IconInput';

const ICON_SIZE = 24;
export default function VerifyOTPForm({ values, onValuesChange }) {
  const otpInputRef = useRef();

  const handleFocus = (ref) => {
    if (ref.current) {
      ref.current.focus();
    }
  };

  function handleInputChange(identified, enteredValue) {
    onValuesChange(identified, enteredValue);
  }

  return (
    <>
      <IconInput
        autoCapitalize='none'
        placeholder='Email'
        placeholderTextColor={Colors.black50}
        inputMode='email'
        textContentType='name'
        returnKeyType='next'
        value={values.email}
        onChangeText={handleInputChange.bind(this, 'email')}
        onSubmitEditing={handleFocus.bind(this, otpInputRef)}
      >
        <MaterialCommunityIcons
          name='email-outline'
          size={ICON_SIZE}
          color={Colors.black75}
        />
      </IconInput>

      <IconInput
        autoCapitalize='none'
        placeholder='Nhập mã xác thực'
        placeholderTextColor={Colors.black50}
        inputMode='email'
        textContentType='oneTimeCode'
        returnKeyType='done'
        ref={otpInputRef}
        value={values.otp}
        maxLength={4}
        onChangeText={handleInputChange.bind(this, 'otp')}
      >
        <MaterialCommunityIcons
          name='key-outline'
          size={ICON_SIZE}
          color={Colors.black75}
        />
      </IconInput>
    </>
  );
}
