import { FontAwesome6 } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

import GoBackTitleBar from '../components/UI/GoBackTitleBar';
import Layout from '../components/UI/Layout';
import SafeContainer from '../components/UI/SafeContainer';
import ChangePasswordForm from '../components/UI/form/ChangePasswordForm';
import PrimaryButton from '../components/UI/button/PrimaryButton';

export default function ChangePassword() {
  return (
    <SafeContainer>
      <Layout>
        <View style={styles.rootContainer}>
          <GoBackTitleBar title='Đổi mật khẩu'>
            <FontAwesome6
              name='chevron-left'
              size={24}
              color='white'
              style={styles.icon}
            />
          </GoBackTitleBar>
          <View style={{flex: 1, marginVertical: 8}}>
            <ChangePasswordForm />
            <View style={{ marginVertical: 16, flex: 1 }}>
              <PrimaryButton>Đổi mật khẩu</PrimaryButton>
            </View>
          </View>
        </View>
      </Layout>
    </SafeContainer>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginVertical: 9,
  },
  icon: {
    paddingEnd: 12,
  },
});
