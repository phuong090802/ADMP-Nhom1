import { Text, Touchable, TouchableOpacity, View } from "react-native"
import IconInput from "../../../atom/icon-input"
import { formStyle, selectData } from "./const"
import MyButton from "../../../atom/my-button"
import { useCallback } from "react"
import MySelect from "../../../atom/my-select"

const RegisterForm = ({ step, setStep, navigation }) => {

    const handleStepChange = useCallback((value) => {
        console.log(!setStep);
        if (!setStep) return
        setStep(value)
    }, [setStep])

    return <View style={formStyle.container}>
        {(step === 1) && <>
            <IconInput
                icon={'phone'}
                placeholder={'Số điện thoại'} />
            <IconInput
                icon={'email'}
                placeholder={'Số điện thoại'} />

            <MySelect
                data={selectData}
                defaultOption={{ key: 'Sinh viên', value: 'Sinh viên' }} />
            <MyButton
                title={'Tiếp tục'}
                onPress={() => handleStepChange(2)} />
        </>}
        {(step === 2) && <>
            <IconInput
                icon={'badge'}
                placeholder={'Họ và tên'} />
            <IconInput
                icon={'lock-outline'}
                placeholder={'Mật khẩu'}
                secureTextEntry={true} />
            <IconInput
                icon={'lock-outline'}
                placeholder={'Xác nhận mật khẩu'}
                secureTextEntry={true} />

            <MyButton
                title={'Đăng ký'} />
        </>}

        <View style={formStyle.footer}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Login')}>
                <Text style={formStyle.footerLink}>Đăng nhập</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('ForgotPassword')}>
                <Text style={formStyle.footerLink}>Quên mật khẩu</Text>
            </TouchableOpacity>
        </View>
    </View>
}

export default RegisterForm