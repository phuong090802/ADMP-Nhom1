import { useRef } from 'react';
import { View, StyleSheet } from 'react-native';

import PasswordInput from '../input/PasswordInput';
import { Colors } from '../../../constants/styles';

export default function ResetPasswordForm({ values, onValuesChange }) {
  const confirmPasswordInputRef = useRef();

  const handleFocus = (ref) => {
    if (ref.current) {
      ref.current.focus();
    }
  };

  function handleInputChange(identified, enteredValue) {
    onValuesChange(identified, enteredValue);
  }

  return (
    <View style={styles.rootContainer}>
      <PasswordInput
        autoCapitalize='none'
        placeholder='Mật khẩu'
        placeholderTextColor={Colors.black50}
        textContentType='newPassword'
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
