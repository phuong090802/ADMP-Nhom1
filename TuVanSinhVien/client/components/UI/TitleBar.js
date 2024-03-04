import { StyleSheet, Text } from 'react-native';

import CustomLinearGradient from './CustomLinearGradient';
import { FONT } from '../../constants/styles';

export default function TitleBar({ children }) {
  return (
    <CustomLinearGradient style={styles.rootContainer}>
      <Text style={styles.title}>{children}</Text>
    </CustomLinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontFamily: FONT,
    fontWeight: 'bold',
  },
});
