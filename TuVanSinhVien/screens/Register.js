import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import RegisterForm from '../components/RegisterForm';
import Button from '../components/UI/Button';
import FlatButton from '../components/UI/FlatButton';
import LogoHCMUTE from '../components/UI/LogoHCMUTE';
import Wrap from '../components/UI/Wrap';
import { Colors, BACK_ICON_SIZE } from '../constants/styles';

export default function Register() {
  return (
    <ScrollView 
    contentContainerStyle={{ flexGrow: 1 }}
    >
    <LinearGradient
      style={styles.container}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      colors={[Colors.primary, Colors.secondary]}
    >
        <View style={styles.logo}>
          <LogoHCMUTE />
        </View>
        <Wrap style={styles.wrap}>
          <View style={styles.back}>
            <View>
              <AntDesign
                name='left'
                size={BACK_ICON_SIZE}
                color={Colors.black75}
                style={{ margin: 0, padding: 0 }}
              />
            </View>
            <Text style={styles.title}>Đăng ký</Text>
          </View>
          <RegisterForm />
          <View style={styles.mainButton}>
            <Button>Đăng ký</Button>
          </View>
          <View style={styles.groupButtons}>
            <FlatButton>Đăng nhập</FlatButton>
            <FlatButton>Quên mật khẩu ?</FlatButton>
          </View>
        </Wrap>
    </LinearGradient>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  back: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontWeight: '900',
    fontSize: 20,
    marginHorizontal: 12,
    marginVertical: 16,
  },
  wrap: {
    flex: 3,
    justifyContent: 'flex-end',
  },
  mainButton: {
    marginVertical: 48,
  },
  groupButtons: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
