import { Image, StyleSheet, View, Text } from "react-native"
import logo from "../../../assets/img/logo.png"
import { fonts } from "../../../constant"

const TitleLogo = () => {
    return <View
        style={style.container}>
        <Image
            source={logo}
            style={style.logo} />
        <Text
            style={style.title}>HCMUTE</Text>
    </View>
}

const style = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 120,
        height: 120
    },
    title: {
        fontSize: 32,
        color: '#fff',
        fontFamily: fonts.Bungee,
        marginVertical: -24
    }
})

export default TitleLogo