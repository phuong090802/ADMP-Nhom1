import { Text, View, StyleSheet } from 'react-native';

import { Colors, FONT } from '../../constants/styles';

export default function Fallback() {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>
        Bạn chưa đăng nhập!!!{'\n'}Vui lòng đăng nhập để đặt câu hỏi
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    color: Colors.black50,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: FONT,
  },
});
