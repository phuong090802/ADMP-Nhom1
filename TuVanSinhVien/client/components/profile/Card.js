import { StyleSheet, View } from 'react-native';
import PrimaryButton from '../UI/button/PrimaryButton';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import IconDetail from '../counsellor/IconDetail';
import { Colors } from '../../constants/styles';

const ICON_SIZE = 24;
export default function Card({ fullName, email, phoneNumber, occupation }) {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.detailContainer}>
        <View style={styles.detailItem}>
          <IconDetail label='Tên:' detail={fullName}>
            <MaterialCommunityIcons
              name='account-outline'
              size={ICON_SIZE}
              color={Colors.black75}
            />
          </IconDetail>
        </View>

        <View style={styles.detailItem}>
          <IconDetail label='Email:' detail={email}>
            <MaterialCommunityIcons
              name='email-outline'
              size={ICON_SIZE}
              color={Colors.black75}
            />
          </IconDetail>
        </View>

        <View style={styles.detailItem}>
          <IconDetail label='Số điện thoại:' detail={phoneNumber}>
            <MaterialCommunityIcons
              name='phone-outline'
              size={ICON_SIZE}
              color={Colors.black75}
            />
          </IconDetail>
        </View>

        <View style={styles.detailItem}>
          <IconDetail label='Nghề nghiệp:' detail={occupation}>
            <MaterialIcons
              name='work-outline'
              size={ICON_SIZE}
              color={Colors.black75}
            />
          </IconDetail>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton style={styles.button}>Chỉnh sửa</PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderRadius: 16,
  },
  detailContainer: {
    paddingHorizontal: 16,
    paddingTop: 8,
    justifyContent: 'space-between',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginHorizontal: 4,
    marginBottom: 8,
  },
  button: {
    fontSize: 16,
    fontWeight: 'normal',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  detailItem: {
    marginVertical: 4,
  },
});
