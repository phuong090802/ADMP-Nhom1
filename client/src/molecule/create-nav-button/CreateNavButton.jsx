import { StyleSheet, View } from "react-native";
import MaterialIcon from "../../atom/material-icon";
import { colors } from "../../../constant";
import Octicon from "../../atom/octicon";

const CreateNavButton = ({ icon, color, size }) => {
    const style = StyleSheet.create({
        container: {
            backgroundColor: color === colors.primary ? colors.primary : '#fff',
            height: 40,
            width: 40,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 999,
            borderWidth: 2,
            borderColor: colors.primary
        }
    })

    return <View style={style.container}>
        <Octicon color={color === colors.primary ? '#fff' : colors.primary } size={30} name={'plus'} />
    </View>
}

export default CreateNavButton