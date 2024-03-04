import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Colors } from '../../constants/styles';

export default function Line() {
  return (
    <View style={style.root}>
      <MaterialCommunityIcons
        name='menu-right'
        size={24}
        color={Colors.black25}
        style={style.icon}
      />
      <View style={style.line} />
    </View>
  );
}

const style = StyleSheet.create({
  root: {
    marginTop: -12,
    marginBottom: -12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginEnd: -12,
    marginStart: -12,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.black25,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
