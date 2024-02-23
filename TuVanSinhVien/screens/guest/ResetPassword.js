import { useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { Keyboard, StyleSheet, View, Alert } from 'react-native';

import Container from '../../components/UI/Container';
import CustomLinearGradient from '../../components/UI/CustomLinearGradient';
import CustomScrollView from '../../components/UI/CustomScrollView';
import GoBack from '../../components/UI/GoBack';
import LogoHCMUTE from '../../components/UI/LogoHCMUTE';
import SafeContainer from '../../components/UI/SafeContainer';
import FlatButton from '../../components/UI/button/FlatButton';
import PrimaryButton from '../../components/UI/button/PrimaryButton';
import ResetPasswordForm from '../../components/UI/form/ResetPasswordForm';
import { isEqualsToOtherValue } from '../../utils/validation';
import { resetPassword } from '../../utils/http/auth';

export default function ResetPassword({ route }) {
  const { token } = route.params;

  const [isLoading, setIsLoading] = useState(false);

  const [values, setValues] = useState({
    password: '',
    confirmPassword: '',
  });

  const handleValuesChange = useCallback(
    (identified, value) => {
      setValues((prevValues) => ({ ...prevValues, [identified]: value }));
    },
    [setValues]
  );

  const navigation = useNavigation();

  async function handlePress() {
    if (!token) {
      Alert.alert('Đã có lỗi xảy ra', 'Đã có lỗi xảy ra. Vui lòng thử lại');
      navigation.goBack();
      return;
    }

    if (!isEqualsToOtherValue(values.password, values.confirmPassword)) {
      Alert.alert('Đăng ký thất bại', 'Nhập lại mật khẩu không chính xác');
      return;
    }

    Keyboard.dismiss();

    try {
      setIsLoading(true);
      const data = await resetPassword(values, token);
      if (data.success) {
        Alert.alert('Thông báo', 'Đặt lại mật khẩu thành công');
        navigation.navigate('Login');
      } else {
        Alert.alert(
          'Đăt lại mật khẩu thất bại',
          'Đăt lại mật khẩu thất bại. Vui lòng thử lại'
        );
      }
    } catch (error) {
      Alert.alert(
        'Đăt lại mật khẩu thất bại',
        error.message || 'ăt lại mật khẩu thất bại. Vui lòng thử lại'
      );
    }
    setIsLoading(false);
  }

  function handleBtnRegisterOnPress() {
    navigation.navigate('Register');
  }

  function handleBtnLoginOnPress() {
    navigation.navigate('Login');
  }

  return (
    <SafeContainer>
      <CustomScrollView>
        <CustomLinearGradient style={styles.root}>
          <View style={styles.logo}>
            <LogoHCMUTE />
          </View>
          <Container style={styles.container}>
            <View style={styles.insideContainer}>
              <View style={styles.formContainer}>
                <GoBack>Đặt lại mật khẩu</GoBack>
                <ResetPasswordForm
                  values={values}
                  onValuesChange={handleValuesChange}
                />
                <View style={styles.mainButton}>
                  <PrimaryButton disabled={isLoading} onPress={handlePress}>
                    Đặt lại mật khẩu
                  </PrimaryButton>
                </View>
              </View>
              <View style={styles.groupButtons}>
                <FlatButton onPress={handleBtnLoginOnPress}>
                  Đăng nhập
                </FlatButton>
                <FlatButton onPress={handleBtnRegisterOnPress}>
                  Đăng ký tài khoản
                </FlatButton>
              </View>
            </View>
          </Container>
          {isLoading && (
            <LoadingOverlay message='Đang đặt lại mật khẩu...' />
          )}
        </CustomLinearGradient>
      </CustomScrollView>
    </SafeContainer>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 2,
    alignSelf: 'center',
  },
  insideContainer: {
    width: '100%',
    height: '100%',
  },
  formContainer: {
    flex: 1,
  },
  mainButton: {
    marginVertical: 44,
  },
  groupButtons: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
