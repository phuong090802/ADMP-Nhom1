import LoginForm from "./LoginForm"
import useMyFonts from "../../../hooks/useMyFonts"
import AuthLayout from "../../../template/auth-layout/AuthLayout"
import { createContext } from "react"

const Login = ({ navigation }) => {

    return <AuthLayout
        title={'Đăng nhập'}>
        <LoginForm
            navigation={navigation} />
    </AuthLayout>
}

export default Login