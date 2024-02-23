import { StyleSheet, View, FlatList } from 'react-native';

import Layout from '../components/UI/Layout';
import SafeContainer from '../components/UI/SafeContainer';
import SearchBar from '../components/UI/SearchBar';
import Card from '../components/news/Card';
import news from '../data/news';

export default function News() {
  return (
    <SafeContainer>
      <Layout>
        <View style={styles.root}>
          <SearchBar title='Tin tức' />
          <View style={styles.listContainer}>
            <FlatList
              data={news}
              renderItem={({ item }) => (
                <Card date={item.date} content={item.content} />
              )}
              keyExtractor={(item) => item._id}
            />
          </View>
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
  listContainer: {
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    backgroundColor: 'white',
    overflow: 'hidden',
    marginVertical: 6,
  },
});
