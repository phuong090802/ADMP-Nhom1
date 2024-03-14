import { StyleSheet, View } from "react-native";
import { colors } from "../../../constant";
import Header from "./Header";
import { style } from "./const";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const Layout = ({ children }) => {
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={style.container}>
          <Header />
          {children}
        </View>
      </SafeAreaView>
    </>
  );
};

export default Layout;
