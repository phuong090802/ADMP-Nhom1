import { StyleSheet, View } from 'react-native';

import PasswordInput from '../input/PasswordInput';
import { Colors } from '../../../constants/styles';

export default function ChangePasswordForm() {
  return (
    <View style={{backgroundColor: 'white', justifyContent: 'center', borderRadius: 16, paddingVertical: 16, paddingHorizontal: 8}}>
      <PasswordInput
        style={styles.item}
        autoCapitalize='none'
        placeholder='Nhập mật khẩu cũ'
        placeholderTextColor={Colors.black50}
        textContentType='newPassword'
        returnKeyType='next'
        // value={values.password}
        // onChangeText={handleInputChange.bind(this, 'password')}
        // onSubmitEditing={handleFocus.bind(this, confirmPasswordInputRef)}
      />
      <PasswordInput
        style={styles.item}
        autoCapitalize='none'
        placeholder='Nhập mật khẩu mới'
        placeholderTextColor={Colors.black50}
        textContentType='newPassword'
        returnKeyType='next'
        // value={values.password}
        // onChangeText={handleInputChange.bind(this, 'password')}
        // onSubmitEditing={handleFocus.bind(this, confirmPasswordInputRef)}
      />

      <PasswordInput
        style={styles.item}
        autoCapitalize='none'
        placeholder='Xác nhận mật khẩu'
        placeholderTextColor={Colors.black50}
        textContentType='password'
        // ref={confirmPasswordInputRef}
        returnKeyType='done'
        // value={values.confirmPassword}
        // onChangeText={handleInputChange.bind(this, 'confirmPassword')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.black10,
    marginVertical: 6,
  },
});
