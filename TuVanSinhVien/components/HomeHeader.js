import { StyleSheet, View } from 'react-native';
import { Feather, Entypo } from '@expo/vector-icons';

import IconButton from './UI/button/IconButton';
import BadgeButton from './UI/button/BadgeButton';
import { ICON_SIZE } from '../constants/styles';

export default function HomeHeader() {
  return (
    <View style={styles.container}>
      <IconButton>
        <Feather name='plus' size={ICON_SIZE} color='black' />
      </IconButton>
      <IconButton>
        <Entypo name='magnifying-glass' size={ICON_SIZE} color='black' />
      </IconButton>
      <BadgeButton>
        <Feather name='message-circle' size={ICON_SIZE} color='black' />
      </BadgeButton>
      <BadgeButton>
        <Feather name='bell' size={ICON_SIZE} color='black' />
      </BadgeButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 12,
  },
});
