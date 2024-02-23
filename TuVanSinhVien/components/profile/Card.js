import { StyleSheet, View } from 'react-native';
import PrimaryButton from '../UI/button/PrimaryButton';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import IconDetail from '../counsellor/IconDetail';
import { Colors } from '../../constants/styles';

const ICON_SIZE = 24;
export default function Card() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.detail}>
        <IconDetail label='Tên:' detail='Trần Nhật Hào'>
          <MaterialCommunityIcons
            name='account-outline'
            size={ICON_SIZE}
            color={Colors.black75}
          />
        </IconDetail>

        <IconDetail label='Email:' detail='Example@hcmute.edu.vn'>
          <MaterialCommunityIcons
            name='email-outline'
            size={ICON_SIZE}
            color={Colors.black75}
          />
        </IconDetail>
        <IconDetail label='Số điện thoại:' detail='0123456789'>
          <MaterialCommunityIcons
            name='phone-outline'
            size={ICON_SIZE}
            color={Colors.black75}
          />
        </IconDetail>
        <IconDetail label='Nghề nghiệp:' detail='Sinh viên'>
          <MaterialIcons
            name='work-outline'
            size={ICON_SIZE}
            color={Colors.black75}
          />
        </IconDetail>
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton style={styles.button}>Chỉnh sửa</PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detail: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: 'space-between',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'flex-end',
  },
  button: {
    fontSize: 16,
    fontWeight: 'normal',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});
