import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

import { Colors } from '../../constants/styles';
import IconDetail from './IconDetail';

const ICON_SIZE = 24;
export default function CardBody({ phoneNumber, email, departmentName, role }) {
  return (
    <View style={styles.root}>
      <IconDetail label='Số điện thoại:' detail={phoneNumber}>
        <MaterialCommunityIcons
          name='phone-outline'
          size={ICON_SIZE}
          color={Colors.black75}
        />
      </IconDetail>

      <IconDetail label='Email:' detail={email}>
        <MaterialCommunityIcons
          name='email-outline'
          size={ICON_SIZE}
          color={Colors.black75}
        />
      </IconDetail>

      <IconDetail label='Đơn vị:' detail={departmentName}>
        <MaterialCommunityIcons
          name='school-outline'
          size={ICON_SIZE}
          color={Colors.black75}
        />
      </IconDetail>

      <IconDetail label='Chức vụ:' detail={role}>
        <MaterialCommunityIcons
          name='badge-account-horizontal-outline'
          size={ICON_SIZE}
          color={Colors.black75}
        />
      </IconDetail>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    borderBottomStartRadius: 16,
    borderBottomEndRadius: 16,
    borderTopWidth: 2,
    borderTopColor: Colors.black10,
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: 'space-between',
  },
});
