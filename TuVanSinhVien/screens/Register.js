import { Keyboard, StyleSheet, View } from 'react-native';

import { useCallback, useState } from 'react';
import RegisterForm from '../components/RegisterForm';
import Container from '../components/UI/Container';
import CustomLinearGradient from '../components/UI/CustomLinearGradient';
import CustomScrollView from '../components/UI/CustomScrollView';
import GoBack from '../components/UI/GoBack';
import LogoHCMUTE from '../components/UI/LogoHCMUTE';
import SafeContainer from '../components/UI/SafeContainer';
import PrimaryButton from '../components/UI/button/PrimaryButton';
import FlatButton from '../components/UI/button/FlatButton';

export default function Register() {
  const [values, setValues] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    occupation: 'Sinh viên',
    password: '',
    confirmPassword: '',
  });

  const handleChangeValues = useCallback(
    (identified, value) => {
      setValues((prevValues) => ({ ...prevValues, [identified]: value }));
    },
    [setValues]
  );

  function handlePress() {
    Keyboard.dismiss()
    console.log(values);
  }

  return (
    <SafeContainer>
      <CustomScrollView>
        <CustomLinearGradient style={styles.root}>
          <View style={styles.logo}>
            <LogoHCMUTE />
          </View>
          <Container style={styles.container}>
            <GoBack>Đăng ký</GoBack>
            <RegisterForm values={values} onChangeValues={handleChangeValues} />
            <View style={styles.mainButton}>
              <PrimaryButton onPress={handlePress}>Đăng ký</PrimaryButton>
            </View>
            <View style={styles.groupButtons}>
              <FlatButton>Đăng nhập</FlatButton>
              <FlatButton>Quên mật khẩu ?</FlatButton>
            </View>
          </Container>
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
    justifyContent: 'flex-end',
  },
  mainButton: {
    marginVertical: 44,
  },
  groupButtons: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
