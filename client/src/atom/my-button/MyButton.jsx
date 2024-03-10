import { StyleSheet, TouchableOpacity, Text } from "react-native"
import { colors, fonts } from "../../../constant"

const MyButton = ({ title, onPress, color }) => {

    const style = StyleSheet.create({
        container: {
            backgroundColor: color || colors.primary,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 44,
            borderRadius: 16
        },
        title: {
            fontFamily: fonts.BahnschriftRegular,
            fontSize: 20,
            color: '#fff',
        }
    })

    return <TouchableOpacity
        style={style.container}
        onPress={onPress}>
        <Text style={style.title}>{title}</Text>
    </TouchableOpacity>
}



export default MyButton