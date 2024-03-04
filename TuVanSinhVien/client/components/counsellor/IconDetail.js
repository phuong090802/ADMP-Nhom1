import { View, Text, StyleSheet } from 'react-native';

import { Colors, FONT } from '../../constants/styles';

export default function IconDetail({ children, label, detail }) {
  return (
    <View style={styles.root}>
      <View style={styles.leftContainer}>
        {children}
        <Text style={[styles.label, styles.text]}>{label}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={[styles.detail, styles.text]}>{detail}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontFamily: FONT,
    color: Colors.black75,
  },
  label: {
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  rightContainer: {
    flex: 2,
  },
  detail: {
    paddingStart: 40,
    lineHeight: 18,
  },
});
