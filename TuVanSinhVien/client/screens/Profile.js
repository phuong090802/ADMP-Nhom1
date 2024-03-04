import { StyleSheet, View } from 'react-native';

import Layout from '../components/UI/Layout';
import SafeContainer from '../components/UI/SafeContainer';
import Card from '../components/profile/Card';
import BarItem from '../components/profile/BarItem';

export default function Profile({ navigation }) {
  return (
    <SafeContainer>
      <Layout>
        <View style={styles.rootContainer}>
          <Card />
          <BarItem title='Đổi mật khẩu' />
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
});
