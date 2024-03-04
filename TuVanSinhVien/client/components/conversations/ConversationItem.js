import { AntDesign } from '@expo/vector-icons';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { Colors, FONT } from '../../constants/styles';

export default function ConversationItem({ fullName, avatar, message }) {
  let imageContent = (
    <Image
      source={require('../../assets/images/user.png')}
      style={styles.image}
    />
  );

  if (avatar) {
    imageContent = <Image source={{ uri: avatar }} style={styles.image} />;
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.leftContainer}>
        {imageContent}
        <View style={styles.textContainer}>
          <Text style={[styles.text, styles.fullName]}>{fullName}</Text>
          <Text style={[styles.text, styles.message]}>{message}</Text>
        </View>
      </View>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      >
        <AntDesign name='right' size={24} color='white' />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 2,
    borderBlockColor: Colors.black10
  },
  leftContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  image: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 24,
  },
  text: {
    fontFamily: FONT,
  },
  fullName: {
    color: Colors.black75,
    fontSize: 13,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: '#e3e7ea',
    padding: 6,
    borderRadius: 24,
  },
  pressed: {
    opacity: 0.7,
  },
});
