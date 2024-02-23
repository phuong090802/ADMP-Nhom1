import { FlatList, StyleSheet, View } from 'react-native';

import Layout from '../components/UI/Layout';
import SafeContainer from '../components/UI/SafeContainer';
import SearchBar from '../components/UI/SearchBar';
import CardHeader from '../components/faq/CardHeader';
import faqs from '../data/faqs';

export default function FAQ() {
  return (
    <SafeContainer>
      <Layout>
        <View style={styles.root}>
          <SearchBar title='Thư viện câu hỏi' />
          <FlatList
            style={styles.list}
            data={faqs}
            renderItem={({ item }) => (
              <CardHeader
                title={item.title}
                departmentName={item.departmentName}
                fieldName={item.fieldName}
                createdAt={item.createdAt}
                views={item.views}
              />
            )}
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
    paddingVertical: 6,
  },
});
