import { StyleSheet, Text } from 'react-native';

import CustomLinearGradient from './CustomLinearGradient';
import { FONT } from '../../constants/styles';

export default function GoBackTitleBar({ children, title }) {
  return (
    <CustomLinearGradient style={styles.rootContainer}>
      {children}
      <Text style={styles.title}>{title}</Text>
    </CustomLinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
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
