import { FlatList, StyleSheet, View } from 'react-native';

import Layout from '../components/UI/Layout';
import SearchBar from '../components/UI/SearchBar';
import SafeContainer from '../components/UI/SafeContainer';
import Card from '../components/question/Card';
import questions from '../data/questions';

export default function Home() {
  return (
    <SafeContainer>
      <Layout>
        <View style={styles.root}>
          <SearchBar title='Hỏi đáp' />
            <FlatList
              style={styles.list}
              data={questions}
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
  },
  list: {
    paddingVertical: 6
  }
});
