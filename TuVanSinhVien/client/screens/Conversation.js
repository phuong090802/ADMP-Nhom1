import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';

import SafeContainer from '../components/UI/SafeContainer';
import Body from '../components/conversation/Body';
import Footer from '../components/conversation/Footer';
import Header from '../components/conversation/Header';
import conversation from '../data/conversation';
import MessageProvider from '../store/message-context';

function RootConversation({ onSendMessage }) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.rootContainer}>
      <Header
        fullName={conversation.fullName}
        role={conversation.role}
        onPress={handleGoBack}
      />
      <View style={styles.bodyContainer}>
        <Body messages={conversation.messages} />
      </View>
      <Footer onPress={onSendMessage} />
    </View>
  );
}

export default function Conversation() {
  return (
    <SafeContainer>
      <MessageProvider>
        <RootConversation />
      </MessageProvider>
    </SafeContainer>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  bodyContainer: {
    flex: 1,
  },
});
