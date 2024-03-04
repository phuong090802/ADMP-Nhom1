import { FlatList, StyleSheet, View } from 'react-native';

import Message from '../message/Message';

export default function Body({ messages }) {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.message}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={messages}
          renderItem={({ item }) => (
            <Message self={item.sender === 1} message={item.content} />
          )}
          keyExtractor={(item) => item._id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  message: {
    marginVertical: 16,
    marginHorizontal: 32,
  },
});
