import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Colors, FONT } from '../../constants/styles';

export default function GoBack({ children }) {
  const navigation = useNavigation();

  function handleOnPress() {
    navigation.goBack();
  }

  return (
    <View style={styles.root}>
      <MaterialIcons
        name='chevron-left'
        size={36}
        color={Colors.black75}
        style={styles.icon}
        onPress={handleOnPress}
      />
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginStart: -8,
    marginEnd: 6,
  },
  text: {
    fontSize: 25,
    marginVertical: 12,
    color: Colors.black75,
    fontFamily: FONT,
    fontWeight: 'bold'
  },
});
