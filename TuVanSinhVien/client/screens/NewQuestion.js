import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import Layout from '../components/UI/Layout';
import SafeContainer from '../components/UI/SafeContainer';
import TitleBar from '../components/UI/TitleBar';
import MakeQuestion from '../components/UI/form/MakeQuestion';
import Fallback from '../components/make-question/Fallback';
import { AuthContext } from '../store/auth-context';
import PrimaryButton from '../components/UI/button/PrimaryButton';

export default function NewQuestion() {
  const authCtx = useContext(AuthContext);

  let content = <Fallback />;

  // if(authCtx.auth.isAuthenticated) {
  //   content =
  // }

  return (
    <SafeContainer>
      <Layout>
        <View style={styles.rootContainer}>
          <View style={styles.formContainer}>
            <TitleBar>Đặt câu hỏi</TitleBar>
            <MakeQuestion />
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton>Đăng câu hỏi</PrimaryButton>
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
  formContainer: {
    flex: 1,
  },
  buttonContainer: {
    marginVertical: 24,
  },
});
