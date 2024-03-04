import { View, TextInput, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useContext } from 'react';

import { Colors, FONT } from '../../../constants/styles';
import IconButton from '../button/IconButton';
import { MessageContext } from '../../../store/message-context';

export default function ChatInput() {
  const messageCtx = useContext(MessageContext);

  function handleSendMessage() {
    messageCtx.sendMessage();
  }

  function handleMessageChange(enteredText) {
    messageCtx.setMessage(enteredText);
  }

  return (
    <View style={styles.rootContainer}>
      <TextInput
        placeholder='Aa'
        autoComplete='off'
        placeholderTextColor={Colors.black50}
        style={styles.input}
        textContentType='none'
        onChangeText={handleMessageChange}
      />
      <IconButton onPress={handleSendMessage}>
        <MaterialCommunityIcons
          name='send-outline'
          size={24}
          color={Colors.primary}
        />
      </IconButton>
    </View>
  );
}
const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: '#e3e7ea',
    flexDirection: 'row',
    borderRadius: 16,
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingStart: 24,
    paddingEnd: 8,
  },
  input: {
    fontSize: 16,
    fontFamily: FONT,
    flex: 1,
  },
});
