import { View, Text, StyleSheet } from 'react-native';

import IconDetail from './IconDetail';
import { Colors } from '../../constants/styles';

export default function CardBody({ phoneNumber, email, departmentName, role }) {
  return (
    <View style={styles.root}>
      <IconDetail
        icon='phone-outline'
        label='Số điện thoại:'
        detail={phoneNumber}
      />
      <IconDetail icon='email-outline' label='Email:' detail={email} />
      <IconDetail
        icon='school-outline'
        label='Đơn vị:'
        detail={departmentName}
      />
      <IconDetail
        icon='badge-account-horizontal-outline'
        label='Chức vụ:'
        detail={role}
      />
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
