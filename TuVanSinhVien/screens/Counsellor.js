import { StyleSheet, View, FlatList } from 'react-native';

import Layout from '../components/UI/Layout';
import SafeContainer from '../components/UI/SafeContainer';
import SearchBar from '../components/UI/SearchBar';
import Card from '../components/counsellor/Card';
import counsellors from '../data/counsellors.js';

export default function Counsellor() {
  return (
    <SafeContainer>
      <Layout>
        <View style={styles.root}>
          <SearchBar title='Danh sách tư vấn viên' />
          <FlatList
            style={styles.list}
            data={counsellors}
            renderItem={({ item }) => <Card item={item} />}
            keyExtractor={(item) => item._id}
          />
        </View>
      </Layout>
    </SafeContainer>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginVertical: 9,
    justifyContent: 'space-between'
  },
  list: {
    paddingVertical: 6
  }
});
