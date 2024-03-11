import { useCallback, useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import IconInput from "../../../atom/icon-input";
import MyButton from "../../../atom/my-button";
import MySelect from "../../../atom/my-select";
import { registerSv } from "../../../service/guest/author.sv";
import { formStyle, initRegisterData, selectData } from "./const";

const RegisterForm = ({ step, setStep, navigation }) => {
  const handleStepChange = useCallback(
    (value) => {
      console.log(!setStep);
      if (!setStep) return;
      setStep(value);
    },
    [setStep]
  );

  const [registerData, setRegisterData] = useState(initRegisterData);

  const handleInputChange = (name, value) => {
    setRegisterData((prev) => ({ ...prev, [name]: value }));
  };

  const register = async () => {
    try {
      const response = await registerSv(registerData);
      console.log(response);
      Alert.alert(response.message || "Tạo tài khoản thành công");
      navigation.navigate("Login");
      setRegisterData(initRegisterData);
    } catch (error) {
      console.log(error);
      Alert.alert(error.message || "Tạo tài khoản không thành công");
    }
  };

  return (
    <View style={formStyle.container}>
      {step === 1 && (
        <>
          <IconInput
            name={"phoneNumber"}
            icon={"phone"}
            placeholder={"Số điện thoại"}
            onChange={handleInputChange}
            value={registerData.phoneNumber}
          />
          <IconInput
            name={"email"}
            icon={"email"}
            placeholder={"Email"}
            onChange={handleInputChange}
            value={registerData.email}
          />

          <MySelect
            name={"occupation"}
            data={selectData}
            defaultOption={{ key: "Sinh viên", value: "Sinh viên" }}
            onChange={handleInputChange}
          />
          <MyButton title={"Tiếp tục"} onPress={() => handleStepChange(2)} />
        </>
      )}
      {step === 2 && (
        <>
          <IconInput
            name={"fullName"}
            icon={"badge"}
            placeholder={"Họ và tên"}
            onChange={handleInputChange}
            value={registerData.fullName}
          />
          <IconInput
            name={"password"}
            icon={"lock-outline"}
            placeholder={"Mật khẩu"}
            onChange={handleInputChange}
            secureTextEntry={true}
            value={registerData.password}
          />
          <IconInput
            name={"confirmPassword"}
            icon={"lock-outline"}
            placeholder={"Xác nhận mật khẩu"}
            onChange={handleInputChange}
            secureTextEntry={true}
            value={registerData.confirmPassword}
          />
          <MyButton title={"Đăng ký"} onPress={register} />
        </>
      )}

      <View style={formStyle.footer}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={formStyle.footerLink}>Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={formStyle.footerLink}>Quên mật khẩu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterForm;
