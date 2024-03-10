import { StyleSheet, View } from "react-native"
import { colors } from "../../../constant"
import Header from "./Header"
import { style } from "./const"

const Layout = ({ children }) => {
    return <View
        style={style.container}>
        <Header />
        {children}
    </View>
}



export default Layout