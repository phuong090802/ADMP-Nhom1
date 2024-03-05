import { FlatList, StyleSheet, View } from 'react-native';

import { useFetch } from '../hooks/main-namespace/use-fetch';
import Layout from '../components/UI/Layout';
import SearchBar from '../components/UI/SearchBar';
import SafeContainer from '../components/UI/SafeContainer';
import Card from '../components/question/Card';
import questions from '../data/questions';
import { defaultPayloadForPaginationQuestions } from '../constants/socket-payload';

export default function Home() {
  const { data: questions } = useFetch(
    'get-all-questions',
    defaultPayloadForPaginationQuestions,
    'question:list'
  );

  // console.log(questions);

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
