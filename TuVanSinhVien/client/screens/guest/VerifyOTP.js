import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Keyboard,
  Dimensions,
} from 'react-native';

import Container from '../../components/UI/Container';
import CustomLinearGradient from '../../components/UI/CustomLinearGradient';
import CustomScrollView from '../../components/UI/CustomScrollView';
import GoBack from '../../components/UI/GoBack';
import LogoHCMUTE from '../../components/UI/LogoHCMUTE';
import SafeContainer from '../../components/UI/SafeContainer';
import FlatButton from '../../components/UI/button/FlatButton';
import PrimaryButton from '../../components/UI/button/PrimaryButton';
import IconInput from '../../components/UI/input/IconInput';
import { Colors, FONT } from '../../constants/styles';
import { verifyOTP } from '../../utils/http/auth';
import LoadingOverlay from '../../components/UI/LoadingOverlay';

// 60s
const OTP_EXPIRE = 60;
const ICON_SIZE = 24;
const windowHeight = Dimensions.get('window').height;

export default function VerifyOTP({ route }) {
  const { email } = route.params;

  const intervalIdRef = useRef();

  const [values, setValues] = useState({
    email: '',
    otp: '',
  });

  const [isTimeout, setIsTimeout] = useState(false);

  const [remainingTime, setRemainingTime] = useState(OTP_EXPIRE);

  const [isLoading, setIsLoading] = useState(false);

  console.log('email: ', email, 'remainingTime', remainingTime);

  const navigation = useNavigation();

  useEffect(() => {
    if (email) {
      setValues((prevValues) => ({ ...prevValues, ['email']: email }));
    }
  }, []);

  const handleValuesChange = useCallback(
    (identified, value) => {
      setValues((prevValues) => ({ ...prevValues, [identified]: value }));
    },
    [setValues]
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime((prevData) => prevData - 1);
      } else {
        setIsTimeout(true);
        clearInterval(intervalId);
      }
    }, 1000);
    intervalIdRef.current = intervalId;
    return () => clearInterval(intervalId);
  }, [remainingTime]);

  async function handlePress() {
    if (!values.email) {
      clearInterval(intervalIdRef.current);
      Alert.alert('Đã có lỗi xảy ra', 'Đã có lỗi xảy ra. Vui lòng thử lại');
      navigation.goBack();
      return;
    }

    if (!values.otp) {
      Alert.alert('Gửi mã xác thực thất bại', 'Vui lòng nhập mã xác thực');
      return;
    }

    Keyboard.dismiss();

    try {
      setIsLoading(true);
      const data = await verifyOTP(values);
      if (data.success) {
        navigation.navigate('ResetPassword', {
          token: data.resetPasswordToken,
        });
      } else {
        Alert.alert('Đã có lỗi xảy ra', 'Đã có lỗi xảy ra. Vui lòng thử lại');
      }
    } catch (error) {
      Alert.alert(
        'Gửi mã xác thực thất bại',
        error.message || 'Đã có lỗi xảy ra. Vui lòng thử lại'
      );
    }
    setIsLoading(false);
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
    }
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
        <CustomLinearGradient style={styles.rootContainer}>
          <View
            style={[styles.logoContainer, { minHeight: windowHeight * 0.312 }]}
          >
            <LogoHCMUTE />
          </View>
          <Container style={styles.container}>
            <View style={styles.insideContainer}>
              <View style={styles.formContainer}>
                <GoBack>Đặt lại mật khẩu</GoBack>
                <IconInput
                  autoCapitalize='none'
                  placeholder='Nhập mã xác thực'
                  placeholderTextColor={Colors.black50}
                  inputMode='email'
                  textContentType='oneTimeCode'
                  returnKeyType='done'
                  value={values.otp}
                  maxLength={6}
                  onChangeText={handleValuesChange.bind(this, 'otp')}
                >
                  <MaterialCommunityIcons
                    name='key-outline'
                    size={ICON_SIZE}
                    color={Colors.black75}
                  />
                </IconInput>
                <Text style={styles.text}>
                  Thời gian còn lại: {remainingTime} giây
                </Text>
                <View style={styles.mainButtonContainer}>
                  <PrimaryButton
                    onPress={handlePress}
                    disabled={isLoading || isTimeout}
                  >
                    Đồng ý
                  </PrimaryButton>
                </View>
              </View>
              <View style={styles.groupButtonsContainer}>
                <FlatButton onPress={handleBtnLoginOnPress}>
                  Đăng nhập
                </FlatButton>
                <FlatButton onPress={handleBtnRegisterOnPress}>
                  Đăng ký tài khoản
                </FlatButton>
              </View>
            </View>
          </Container>
          {isLoading && <LoadingOverlay message='Đang gửi...' />}
        </CustomLinearGradient>
      </CustomScrollView>
    </SafeContainer>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
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
  mainButtonContainer: {
    marginVertical: 14,
  },
  groupButtonsContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    color: Colors.black50,
    fontSize: 10,
    fontFamily: FONT,
    textAlign: 'center',
    marginTop: -6,
  },
});
