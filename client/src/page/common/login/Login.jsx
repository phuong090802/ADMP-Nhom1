import LoginForm from "./LoginForm";
import AuthLayout from "../../../template/auth-layout/AuthLayout";
import { StatusBar } from "expo-status-bar";

const Login = ({ navigation }) => {
  return (
      <AuthLayout
        title={"Đăng nhập"}
        onBack={() => navigation.navigate("AppHome")}
      >
        <LoginForm navigation={navigation} />
      </AuthLayout>
  );
};

export default Login;
