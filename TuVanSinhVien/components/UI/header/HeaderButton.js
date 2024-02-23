import { Feather } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import BadgeButton from '../button/BadgeButton';

const ICON_SIZE = 24;

export default function HeaderButton({onPressLogout}) {
  return (
    <View style={styles.container}>
      <BadgeButton>
        <Feather name='message-circle' size={ICON_SIZE} color='black' />
      </BadgeButton>
      <BadgeButton>
        <Feather name='bell' size={ICON_SIZE} color='black' />
      </BadgeButton>
      <MaterialIcons name='logout' size={ICON_SIZE} color='black' onPress={onPressLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 12,
  },
});
