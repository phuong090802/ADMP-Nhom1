import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import IconInput from '../components/UI/IconInput';
import { Colors, ICON_SIZE } from '../constants/styles';

export default function RegisterForm() {
  return (
    <>
      <IconInput placeholder='Họ & Tên' placeholderTextColor={Colors.black50}>
        <MaterialCommunityIcons
          name='badge-account-horizontal-outline'
          size={ICON_SIZE}
          color={Colors.black75}
        />
      </IconInput>

      <IconInput
        placeholder='Số điện thoại'
        placeholderTextColor={Colors.black50}
      >
        <MaterialCommunityIcons
          name='phone-outline'
          size={ICON_SIZE}
          color={Colors.black75}
        />
      </IconInput>

      <IconInput placeholder='Email' placeholderTextColor={Colors.black50}>
        <MaterialCommunityIcons
          name='email-outline'
          size={ICON_SIZE}
          color={Colors.black75}
        />
      </IconInput>

      <IconInput
        placeholder='Nghề nghiệp'
        placeholderTextColor={Colors.black50}
      >
        <MaterialIcons
          name='work-outline'
          size={ICON_SIZE}
          color={Colors.black75}
        />
      </IconInput>

      <IconInput
        secureTextEntry={true}
        placeholder='Mật khẩu'
        placeholderTextColor={Colors.black50}
      >
        <MaterialIcons
          name='lock-outline'
          size={ICON_SIZE}
          color={Colors.black75}
        />
      </IconInput>

      <IconInput
        secureTextEntry={true}
        placeholder='Nhập mật khẩu'
        placeholderTextColor={Colors.black50}
      >
        <MaterialIcons
          name='lock-outline'
          size={ICON_SIZE}
          color={Colors.black75}
        />
      </IconInput>
    </>
  );
}

