import { Text, TouchableOpacity, View } from "react-native"
import IconInput from "../../../atom/icon-input"
import { formStyle } from "./const"
import MyButton from "../../../atom/my-button"

const LoginForm = ({ navigation }) => {

    return <View style={formStyle.container}>
        <IconInput
            icon={'phone'}
            placeholder={'Số điện thoại'} />
        <IconInput
            icon={'lock-outline'}
            placeholder={'Mật khẩu'} />
        <MyButton
            title={'Đăng nhập'} />
        <View style={formStyle.footer}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Register')}>
                <Text style={formStyle.footerLink}>Đăng ký</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('ForgotPassword')}>
                <Text style={formStyle.footerLink}>Quên mật khẩu</Text>
            </TouchableOpacity>
        </View>
    </View>
}

export default LoginForm