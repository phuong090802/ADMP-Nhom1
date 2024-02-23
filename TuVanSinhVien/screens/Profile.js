import { View, StyleSheet } from 'react-native';

import SafeContainer from '../components/UI/SafeContainer';
import Layout from '../components/UI/Layout';
import SearchBar from '../components/UI/SearchBar';
import Card from '../components/profile/Card';

export default function Profile({ navigation }) {
  return (
    <SafeContainer>
      <Layout>
        <View style={styles.root}>
          <Card />
        </View>
      </Layout>
    </SafeContainer>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginVertical: 9,
  },
});
