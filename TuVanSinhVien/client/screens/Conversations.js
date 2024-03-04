import { FlatList, StyleSheet, View } from 'react-native';

import Layout from '../components/UI/Layout';
import SafeContainer from '../components/UI/SafeContainer';
import TitleBar from '../components/UI/TitleBar';
import conversations from '../data/conversations';
import ConversationItem from '../components/conversations/ConversationItem';

export default function Conversations({ navigation }) {
  return (
    <SafeContainer>
      <Layout>
        <View style={styles.rootContainer}>
          <TitleBar>Hội thoại</TitleBar>
          <View style={styles.listContainer}>
            <FlatList
              data={conversations}
              renderItem={({ item }) => (
                <ConversationItem
                  fullName={item.fullName}
                  avatar={item.avatar}
                  message={item.message}
                />
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
  rootContainer: {
    flex: 1,
    marginVertical: 9,
  },
  listContainer: {
    marginVertical: 8,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    overflow: 'hidden',
  },
});
