import { StyleSheet, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { FONT, ICON_SIZE } from '../../constants/styles';
import CustomLinearGradient from './CustomLinearGradient';
import IconButton from './button/IconButton';

export default function SearchBar({ title }) {
  return (
    <CustomLinearGradient style={styles.rootContainer}>
      <Text style={styles.title}>{title}</Text>
      <IconButton>
        <Entypo
          name='magnifying-glass'
          size={ICON_SIZE}
          color='white'
          style={styles.icon}
        />
      </IconButton>
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
  icon: {
    marginEnd: -12,
  },
});
