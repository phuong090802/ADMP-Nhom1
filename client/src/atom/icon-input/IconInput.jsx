import { StyleSheet, TextInput, View } from "react-native"
import MaterialIcon from "../material-icon"
import useMyFonts from "../../hooks/useMyFonts"
import { colors, fonts } from "../../../constant"

const IconInput = ({ icon, iconColor, iconSize, placeholder, keyboardType, secureTextEntry }) => {

    useMyFonts()

    return <View style={style.container}>
        <View style={style.icon}>
            <MaterialIcon
                name={icon}
                size={iconSize || 24}
                color={iconColor || '#000'}
            />
        </View>
        <TextInput
            style={style.iconInput}
            placeholder={placeholder || ''}
            keyboardType={keyboardType || "default"}
            secureTextEntry={secureTextEntry} />
    </View>
}

const style = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        borderWidth: 1,
        borderColor: colors.black10,
        borderRadius: 16,
        overflow: 'hidden'
    },
    icon: {
        height: 44,
        display: 'flex',
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingHorizontal: 8
    },
    iconInput: {
        flex: 1,
        height: 44,
        backgroundColor: '#fff',
        fontFamily: fonts.BahnschriftRegular,
        fontSize: 16
    }
})

export default IconInput