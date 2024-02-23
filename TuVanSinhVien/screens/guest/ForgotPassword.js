import { Keyboard, StyleSheet, View, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import Container from '../../components/UI/Container';
import CustomLinearGradient from '../../components/UI/CustomLinearGradient';
import CustomScrollView from '../../components/UI/CustomScrollView';
import GoBack from '../../components/UI/GoBack';
import LogoHCMUTE from '../../components/UI/LogoHCMUTE';
import SafeContainer from '../../components/UI/SafeContainer';
import { Colors } from '../../constants/styles';
import IconInput from '../../components/UI/input/IconInput';
import PrimaryButton from '../../components/UI/button/PrimaryButton';
import FlatButton from '../../components/UI/button/FlatButton';
import { isEmail } from '../../utils/validation';
import { forgotPassword } from '../../utils/http/auth';
import LoadingOverlay from '../../components/UI/LoadingOverlay';

const ICON_SIZE = 24;
export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  function handleEmailChange(enteredValue) {
    setEmail(enteredValue);
  }

  async function handlePress() {
    if (!email) {
      Alert.alert('Quên mật khẩu thất bại', 'Vui lòng kiểm tra lại email');
      return;
    }

    if (!isEmail(email)) {
      Alert.alert('Quên mật khẩu thất bại', 'Email không đúng định dạng');
      return;
    }
    Keyboard.dismiss();

    try {
      setIsLoading(true);
      const data = await forgotPassword({ email });
      if (data.success) {
        navigation.navigate('VerifyOTP', { email });
      } else {
        Alert.alert(
          'Quên mật khẩu thất bại',
          'Quên mật khẩu thất bại. Vui lòng thử lại'
        );
      }
    } catch (error) {
      Alert.alert(
        'Quên mật khẩu thất bại',
        error.message || 'Quên mật khẩu thất bại. Vui lòng thử lại'
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
                <GoBack>Quên mật khẩu</GoBack>
                <IconInput
                  autoCapitalize='none'
                  placeholder='Email'
                  placeholderTextColor={Colors.black50}
                  inputMode='email'
                  textContentType='name'
                  returnKeyType='done'
                  value={email}
                  onChangeText={handleEmailChange}
                >
                  <MaterialCommunityIcons
                    name='email-outline'
                    size={ICON_SIZE}
                    color={Colors.black75}
                  />
                </IconInput>
                <View style={styles.mainButton}>
                  <PrimaryButton onPress={handlePress}>
                    Quên mật khẩu
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
          {isLoading && <LoadingOverlay message='Đang gửi email...' />}
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
