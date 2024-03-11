import "react-native-get-random-values";
import Realm from "realm";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/page/common/login";
import Register from "./src/page/common/register";
import useMyFonts from "./src/hooks/useMyFonts";
import ForgotPassword from "./src/page/common/forgot-password";
import AppHome from "./src/page/common/app-home";
import Store from "./src/store/Store";

export default function App() {
  console.log("App is running");
  const Stack = createNativeStackNavigator();

  const { onLayoutRootView } = useMyFonts();

  return (
    <Store>
      <NavigationContainer>
        <View style={style.root} onLayoutRootView={onLayoutRootView}>
          <Stack.Navigator
            initialRouteName="AppHome"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="AppHome" component={AppHome} />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </Store>
  );
}

const style = StyleSheet.create({
  root: {
    flex: 1,
  },
});
