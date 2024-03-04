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
        <View style={styles.rootContainer}>
          <SearchBar title='Hỏi đáp' />
          <FlatList
            showsVerticalScrollIndicator={false}
            style={styles.listContainer}
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
  rootContainer: {
    flex: 1,
    marginVertical: 9,
  },
  listContainer: {
    paddingVertical: 6,
  },
});
