import { Text, View } from 'react-native';

import Layout from '../components/Layout';
import SafeContainer from '../components/UI/SafeContainer';

export default function Home() {
  return (
    <SafeContainer>
      <Layout>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home</Text>
        </View>
      </Layout>
    </SafeContainer>
  );
}
